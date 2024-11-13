<!-- <template>
    <section ref="demosSection" class="invisible border-4">
      <ul ref="imageBlendShapes" class="blend-shapes-list"></ul>
      <h2>Demo: Webcam continuous face landmarks detection</h2>
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
  
  const demosSection = ref<HTMLDivElement | null>(null);
  const imageBlendShapes = ref<HTMLUListElement | null>(null);
  const videoBlendShapes = ref<HTMLUListElement | null>(null);
  const webcamButtonLabel = ref('ENABLE WEBCAM');
  const snapshot = ref<File | null>(null);
  const snapshotURL = ref<string | null>(null);
  
  const video = ref<HTMLVideoElement | null>(null);
  const canvas = ref<HTMLCanvasElement | null>(null);
  const webcamRunning = ref(false);
  let faceLandmarker: FaceLandmarker;
  let runningMode: 'IMAGE' | 'VIDEO' = 'IMAGE';
  let lastVideoTime = -1;
  
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
  
  const handleClick = async (event: MouseEvent) => {
    if (!faceLandmarker) return;
  
    if (runningMode === 'VIDEO') {
      runningMode = 'IMAGE';
      await faceLandmarker.setOptions({ runningMode });
    }
  
    const target = event.target as HTMLImageElement;
    const canvas = document.createElement('canvas');
    canvas.width = target.naturalWidth;
    canvas.height = target.naturalHeight;
  
    const faceLandmarkerResult = await faceLandmarker.detect(target);
    drawBlendShapes(imageBlendShapes.value, faceLandmarkerResult.faceBlendshapes);
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
  
    let results = await faceLandmarker.detectForVideo(video.value, performance.now());
    if (results && results.faceLandmarks) {
      console.log("Face landmarks detected:", results.faceLandmarks);
      const ctx = canvasElement.getContext('2d')!;
      ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      const drawingUtils = new DrawingUtils(ctx);
  
      results.faceLandmarks.forEach(landmarks => {
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_TESSELATION, { color: "#C0C0C070", lineWidth: 1 });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE, { color: "#FF3030" });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW, { color: "#FF3030" });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_EYE, { color: "#30FF30" });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW, { color: "#30FF30" });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_FACE_OVAL, { color: "#E0E0E0" });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LIPS, { color: "#E0E0E0" });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS, { color: "#FF3030" });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS, { color: "#30FF30" });
      });
  
      drawBlendShapes(videoBlendShapes.value, results.faceBlendshapes);
    } else {
      console.log("No landmarks detected.");
    }
  
    if (webcamRunning.value) {
      requestAnimationFrame(predictWebcam);
    }
  };
  
  const takeSnapshot = () => {
    if (!video.value) return;
  
    const snapshotCanvas = document.createElement('canvas');
    snapshotCanvas.width = video.value.videoWidth;
    snapshotCanvas.height = video.value.videoHeight;
    const ctx = snapshotCanvas.getContext('2d');
    ctx!.drawImage(video.value, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
  
    snapshotCanvas.toBlob((blob) => {
      if (blob) {
        snapshot.value = new File([blob], 'snapshot.png', { type: 'image/png' });
        snapshotURL.value = URL.createObjectURL(snapshot.value); // Generate a URL for preview
      }
    });
  };
  
  const drawBlendShapes = (element: HTMLUListElement | null, blendShapes: any[]) => {
    if (!element || !blendShapes.length) return;
  
    element.innerHTML = blendShapes[0].categories
      .map(shape => `<li>${shape.displayName || shape.categoryName}: ${(shape.score * 100).toFixed(2)}%</li>`)
      .join('');
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
   -->

   <template>
    <div class="container">
      <section ref="demosSection" class="invisible border-4">
        <h2>Demo: Webcam continuous face landmarks detection</h2>
        <p>
          Hold your face in front of your webcam to get real-time face landmarker detection.<br />
          Click <b>enable webcam</b> below and grant access to the webcam if prompted.
        </p>
        <div v-if="loading" class="spinner">Loading...</div>
        <div v-else id="liveView" class="videoView">
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
        <div v-if="uploading" class="upload-spinner">Uploading...</div>
        <div v-if="snapshot" class="snapshot-preview">
          <h2>Snapshot Preview</h2>
          <img :src="snapshotURL" alt="Snapshot Preview" />
        </div>
      </section>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { FaceLandmarker, FilesetResolver, DrawingUtils } from '@mediapipe/tasks-vision';
  import { useUploadFile } from "@/composables/core/upload";
  const { uploadFile, loading: processing, uploadResponse } = useUploadFile();
  
  const demosSection = ref<HTMLDivElement | null>(null);
  const webcamButtonLabel = ref('ENABLE WEBCAM');
  const snapshot = ref<File | null>(null);
  const snapshotURL = ref<string | null>(null);
  
  const video = ref<HTMLVideoElement | null>(null);
  const canvas = ref<HTMLCanvasElement | null>(null);
  const webcamRunning = ref(false);
  const loading = ref(true);
  const uploading = ref(false);
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
    loading.value = false;  // Hide the loading spinner once model is loaded
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
      ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      const drawingUtils = new DrawingUtils(ctx);
  
      results.faceLandmarks.forEach(landmarks => {
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_TESSELATION, { color: "#C0C0C070", lineWidth: 1 });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE, { color: "#FF3030" });
        drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_EYE, { color: "#30FF30" });
      });
    }
  
    if (webcamRunning.value) {
      requestAnimationFrame(predictWebcam);
    }
  };
  
  const takeSnapshot = () => {
    if (!video.value) return;
  
    const snapshotCanvas = document.createElement('canvas');
    snapshotCanvas.width = video.value.videoWidth;
    snapshotCanvas.height = video.value.videoHeight;
    const ctx = snapshotCanvas.getContext('2d');
    ctx!.drawImage(video.value, 0, 0, snapshotCanvas.width, snapshotCanvas.height);
  
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
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    text-align: center;
  }
  
  .spinner,
  .upload-spinner {
    margin-top: 20px;
    font-size: 1.5rem;
    color: #007f8b;
    font-weight: bold;
  }
  
  .snapshot-preview img {
    max-width: 100%;
    margin-top: 10px;
  }
  
  .output_canvas {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
  }
  </style>
  