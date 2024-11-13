<template>
    <section ref="demosSection" class="invisible">
      <h2>Demo: Detecting Images</h2>
      <p><b>Click on an image below</b> to see the key landmarks of the face.</p>
      <div class="detectOnClick">
        <img
          src="https://storage.googleapis.com/mediapipe-assets/portrait.jpg"
          @click="handleClick"
          width="100%"
          crossorigin="anonymous"
          title="Click to get detection!"
        />
      </div>
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
        <div style="position: relative;">
          <video ref="video" autoplay playsinline></video>
          <canvas ref="canvas" class="output_canvas" style="position: absolute; left: 0; top: 0;"></canvas>
        </div>
      </div>
      <ul ref="videoBlendShapes" class="blend-shapes-list"></ul>
    </section>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { FaceLandmarker, FilesetResolver, DrawingUtils } from '@mediapipe/tasks-vision';
  
  const demosSection = ref<HTMLDivElement | null>(null);
  const imageBlendShapes = ref<HTMLUListElement | null>(null);
  const videoBlendShapes = ref<HTMLUListElement | null>(null);
  const webcamButtonLabel = ref('ENABLE WEBCAM');
  
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
  /* Add your custom styles here */
  </style>
  