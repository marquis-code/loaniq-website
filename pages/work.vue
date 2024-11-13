

   <template>
    <section ref="demosSection" class="invisible border-4">
      <ul ref="imageBlendShapes" class="blend-shapes-list"></ul>
      <h2>Loan IQ Liveliness Check</h2>
      <p>
        Hold your face in front of your webcam to get real-time face landmarker detection.<br />
        Click <b>enable webcam</b> below and grant access to the webcam if prompted.
      </p>
      <div id="liveView" class="videoView">
        <button @click="enableCam" class="mdc-button mdc-button--raised">
          <span class="mdc-button__ripple"></span>
          <span class="mdc-button__label">{{ webcamButtonLabel }}</span>
        </button>
        <button v-if="webcamRunning" @click="takeSnapshot" class="mdc-button mdc-button--raised" style="margin-top: 10px;">
          <span class="mdc-button__ripple"></span>
          <span class="mdc-button__label">TAKE SNAPSHOT</span>
        </button>
        <div style="position: relative;">
          <video ref="video" autoplay playsinline></video>
          <canvas ref="canvas" class="output_canvas" style="position: absolute; left: 0; top: 0;"></canvas>
        </div>
      </div>
  
      <div v-if="snapshot" class="snapshot-preview">
        <h2>Snapshot Preview</h2>
        <img :src="snapshotURL" alt="Snapshot Preview" />
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { FaceLandmarker, FilesetResolver, DrawingUtils } from '@mediapipe/tasks-vision';
  import { useUploadFile } from "@/composables/core/upload";
  const { uploadFile, loading: processing, uploadResponse } = useUploadFile();// Import the upload composable
  
  const demosSection = ref<HTMLDivElement | null>(null);
  const webcamButtonLabel = ref('ENABLE WEBCAM');
  const snapshot = ref<File | null>(null);
  const snapshotURL = ref<string | null>(null);
  const uploading = ref(false); // State to track upload status
  
  const video = ref<HTMLVideoElement | null>(null);
  const canvas = ref<HTMLCanvasElement | null>(null);
  const webcamRunning = ref(false);
  let faceLandmarker: FaceLandmarker;
  let runningMode: 'IMAGE' | 'VIDEO' = 'IMAGE';
  
  const createFaceLandmarker = async () => {
    const filesetResolver = await FilesetResolver.forVisionTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm'
    );
    faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
      baseOptions: {
        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
        delegate: 'GPU'
      },
      outputFaceBlendshapes: true,
      runningMode,
      numFaces: 1
    });
    demosSection.value?.classList.remove('invisible');
    console.log("FaceLandmarker model loaded:", faceLandmarker !== undefined);
  };
  
  const enableCam = async () => {
    if (!faceLandmarker) return;
  
    if (webcamRunning.value) {
      webcamRunning.value = false;
      webcamButtonLabel.value = 'ENABLE WEBCAM';
    } else {
      webcamRunning.value = true;
      webcamButtonLabel.value = 'DISABLE WEBCAM';
    }
  
    const constraints = { video: { width: 640, height: 480 } };
  
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      video.value!.srcObject = stream;
      video.value!.onloadeddata = predictWebcam;
    }
  };
  
  const predictWebcam = async () => {
    if (!faceLandmarker || !video.value || !canvas.value || !webcamRunning.value) return;
  
    if (runningMode === 'IMAGE') {
      runningMode = 'VIDEO';
      await faceLandmarker.setOptions({ runningMode });
    }
  
    const canvasElement = canvas.value;
    canvasElement.width = video.value.videoWidth;
    canvasElement.height = video.value.videoHeight;
  
    const results = await faceLandmarker.detectForVideo(video.value, performance.now());
    if (results && results.faceLandmarks) {
      const ctx = canvasElement.getContext('2d')!;
      ctx.clearRect(0, 0, canvasElement.width, canvasElement.height); // Clear the previous frame
  
      const drawingUtils = new DrawingUtils(ctx);
  
      results.faceLandmarks.forEach(landmarks => {
        // Draw the face mesh connected to facial features
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_TESSELATION, { color: "#C0C0C070", lineWidth: 1 });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE, { color: "#FF3030" });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_EYE, { color: "#30FF30" });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_FACE_OVAL, { color: "#E0E0E0" });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LIPS, { color: "#E0E0E0" });
      });
    } else {
      console.log("No landmarks detected.");
    }
  
    if (webcamRunning.value) {
      requestAnimationFrame(predictWebcam); // Continue the loop to keep the face mesh glued
    }
  };
  
  const takeSnapshot = async () => {
    if (!video.value || !faceLandmarker) return;
  
    const results = await faceLandmarker.detectForVideo(video.value, performance.now());
    if (!results || !results.faceLandmarks || results.faceLandmarks.length === 0) return;
  
    const faceLandmarks = results.faceLandmarks[0];
    
    // Calculate bounding box around the face
    const xCoords = faceLandmarks.map((landmark) => landmark.x * video.value!.videoWidth);
    const yCoords = faceLandmarks.map((landmark) => landmark.y * video.value!.videoHeight);
    const minX = Math.min(...xCoords);
    const maxX = Math.max(...xCoords);
    const minY = Math.min(...yCoords);
    const maxY = Math.max(...yCoords);
  
    const boundingBoxWidth = maxX - minX;
    const boundingBoxHeight = maxY - minY;
  
    // Create a canvas to capture only the face area
    const snapshotCanvas = document.createElement('canvas');
    snapshotCanvas.width = boundingBoxWidth;
    snapshotCanvas.height = boundingBoxHeight;
    const ctx = snapshotCanvas.getContext('2d');
    ctx!.drawImage(
      video.value,
      minX, minY, boundingBoxWidth, boundingBoxHeight,
      0, 0, boundingBoxWidth, boundingBoxHeight
    );
  
    snapshotCanvas.toBlob(async (blob) => {
      if (blob) {
        snapshot.value = new File([blob], 'snapshot.png', { type: 'image/png' });
        snapshotURL.value = URL.createObjectURL(snapshot.value); // Generate a URL for preview
  
        // Start uploading
        uploading.value = true;
        try {
          await uploadFile(snapshot.value);  // Call the upload composable
          console.log('Image uploaded successfully');
        } catch (error) {
          console.error('Upload failed', error);
        } finally {
          uploading.value = false;
        }
      }
    });
  };
  
  onMounted(() => {
    createFaceLandmarker();
  });
  </script>
  
  <style scoped>
  .snapshot-preview img {
    max-width: 100%;
    margin-top: 10px;
  }
  </style>
  