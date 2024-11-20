<template>
  <section
    ref="demosSection"
    :style="{
      background: 'linear-gradient(180deg, rgb(97, 111, 164) 0%, rgb(18, 45, 118) 100%)'
    }"
    class="invisible h-screen flex flex-col items-center justify-center bg-gradient-face p-6"
  >
<div class="max-w-xs  w-full">
  <button class="bg-white rounded-full p-2" @click="handleBackButton">
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
   </button>
</div>
    <div class="flex items-center flex-col">
      <div
        id="liveView"
        class="videoView flex flex-col items-center mt-5 space-y-4 animate-fade-in"
      >
        <!-- <div class="relative flex justify-center items-center mt-4 border-4 border-white rounded-lg overflow-hidden shadow-lg">
          <video ref="video" autoplay playsinline class="rounded-lg shadow-md"></video>
          <canvas ref="canvas" class="output_canvas absolute inset-0"></canvas>
        </div> -->
        <div
          class="relative flex justify-center items-center p-1 mt-4 rounded-lg overflow-hidden shadow-lg"
        >
          <!-- Video Element -->
          <video
            ref="video"
            autoplay
            playsinline
            class="rounded-lg  shadow-md"
          ></video>

          <!-- Canvas Element -->
          <canvas ref="canvas" class="output_canvas absolute z-50 inset-0"></canvas>
          
          <!-- Green Borders -->
          <div
            class="absolute z-50 top-0 left-0 w-12 h-20 border-4 border-teal-400"
            style="border-right: none; border-bottom: none"
          ></div>
          <div
            class="absolute z-50 top-0 right-0 w-12 h-20 border-4 border-teal-400"
            style="border-left: none; border-bottom: none"
          ></div>
          <div
            class="absolute z-50 bottom-0 left-0 w-12 h-20 border-4 border-teal-400"
            style="border-right: none; border-top: none"
          ></div>
          <div
            class="absolute z-50 bottom-0 right-0 w-12 h-20 border-4 border-teal-400"
            style="border-left: none; border-top: none"
          ></div>
        </div>
        <button
          @click="enableCam"
          class="mdc-button mdc-button--raised text-sm bg-blue-600 hover:bg-blue-700 transition transform hover:scale-105 text-white text-lg px-6 py-3.5 rounded-lg shadow-lg"
        >
          <span class="mdc-button__label">{{ webcamButtonLabel }}</span>
        </button>

        <button
          v-if="webcamRunning"
          @click="takeSnapshot"
          class="mdc-button mdc-button--raised text-sm mt-2 bg-green-600 hover:bg-green-700 transition transform hover:scale-105 text-white text-lg px-6 py-3.5 rounded-lg shadow-lg"
        >
          <span class="mdc-button__label">VERIFY MY FACE</span>
        </button>

      </div>
    </div>

    <div
      v-if="livelinessLoading || processing"
      class="loader-overlay fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50 text-white space-y-4"
    >
      <svg
        class="w-16 h-16 animate-spin text-gray-100"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
      >
        <path
          d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
          stroke="currentColor"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <p class="text-center text-white text-lg z-50">
        {{ processing ? 'please wait while we upload your image...' : '' }}
        {{ livelinessLoading ? 'Please wait while we perform the liveliness check...' : '' }}
        
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import {
  FaceLandmarker,
  FilesetResolver,
  DrawingUtils,
} from "@mediapipe/tasks-vision";
import { useCustomToast } from "@/composables/core/useCustomToast";
import { useUploadFile } from "@/composables/core/upload";
import { useLivelinessCheck } from "@/composables/auth/liveliness_check";
const { uploadFile, loading: processing, uploadResponse } = useUploadFile(); // Import the upload composable
const { loading: livelinessLoading, livelinessCheck } = useLivelinessCheck();
const { showToast } = useCustomToast();
const router = useRouter()

const demosSection = ref<HTMLDivElement | null>(null);
const webcamButtonLabel = ref("ENABLE WEBCAM");
const snapshot = ref<File | null>(null);
const snapshotURL = ref<string | null>(null);
const uploading = ref(false); // State to track upload status

const video = ref<HTMLVideoElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);
const webcamRunning = ref(false);
let faceLandmarker: FaceLandmarker;
let runningMode: "IMAGE" | "VIDEO" = "IMAGE";

const createFaceLandmarker = async () => {
  const filesetResolver = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
  );
  faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
      delegate: "GPU",
    },
    outputFaceBlendshapes: true,
    runningMode,
    numFaces: 1,
  });
  demosSection.value?.classList.remove("invisible");
  console.log("FaceLandmarker model loaded:", faceLandmarker !== undefined);
};

const enableCam = async () => {
  if (!faceLandmarker) return;

  if (webcamRunning.value) {
    // Turn off the webcam
    const stream = video.value?.srcObject as MediaStream;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop()); // Stop all video tracks
    }
    video.value!.srcObject = null; // Clear the video element's srcObject
    webcamRunning.value = false;
    webcamButtonLabel.value = "ENABLE WEBCAM";
  } else {
    // Turn on the webcam
    webcamRunning.value = true;
    webcamButtonLabel.value = "DISABLE WEBCAM";

    const constraints = { video: { width: 640, height: 480 } };

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      video.value!.srcObject = stream;
      video.value!.onloadeddata = predictWebcam;
    }
  }
};

const predictWebcam = async () => {
  if (!faceLandmarker || !video.value || !canvas.value || !webcamRunning.value)
    return;

  if (runningMode === "IMAGE") {
    runningMode = "VIDEO";
    await faceLandmarker.setOptions({ runningMode });
  }

  const canvasElement = canvas.value;
  canvasElement.width = video.value.videoWidth;
  canvasElement.height = video.value.videoHeight;

  const results = await faceLandmarker.detectForVideo(
    video.value,
    performance.now()
  );
  if (results && results.faceLandmarks) {
    const ctx = canvasElement.getContext("2d")!;
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height); // Clear the previous frame

    const drawingUtils = new DrawingUtils(ctx);

    results.faceLandmarks.forEach((landmarks) => {
      // Draw the face mesh connected to facial features
      drawingUtils.drawConnectors(
        landmarks,
        FaceLandmarker.FACE_LANDMARKS_TESSELATION,
        { color: "#C0C0C070", lineWidth: 1 }
      );
      drawingUtils.drawConnectors(
        landmarks,
        FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE,
        { color: "#FF3030" }
      );
      drawingUtils.drawConnectors(
        landmarks,
        FaceLandmarker.FACE_LANDMARKS_LEFT_EYE,
        { color: "#30FF30" }
      );
      drawingUtils.drawConnectors(
        landmarks,
        FaceLandmarker.FACE_LANDMARKS_FACE_OVAL,
        { color: "#E0E0E0" }
      );
      drawingUtils.drawConnectors(
        landmarks,
        FaceLandmarker.FACE_LANDMARKS_LIPS,
        { color: "#E0E0E0" }
      );
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

  const results = await faceLandmarker.detectForVideo(
    video.value,
    performance.now()
  );
  if (!results || !results.faceLandmarks || results.faceLandmarks.length === 0)
    return;

  const faceLandmarks = results.faceLandmarks[0];

  // Calculate bounding box around the face
  const xCoords = faceLandmarks.map(
    (landmark) => landmark.x * video.value!.videoWidth
  );
  const yCoords = faceLandmarks.map(
    (landmark) => landmark.y * video.value!.videoHeight
  );
  const minX = Math.min(...xCoords);
  const maxX = Math.max(...xCoords);
  const minY = Math.min(...yCoords);
  const maxY = Math.max(...yCoords);

  const boundingBoxWidth = maxX - minX;
  const boundingBoxHeight = maxY - minY;

  // Create a canvas to capture only the face area
  const snapshotCanvas = document.createElement("canvas");
  snapshotCanvas.width = boundingBoxWidth;
  snapshotCanvas.height = boundingBoxHeight;
  const ctx = snapshotCanvas.getContext("2d");
  ctx!.drawImage(
    video.value,
    minX,
    minY,
    boundingBoxWidth,
    boundingBoxHeight,
    0,
    0,
    boundingBoxWidth,
    boundingBoxHeight
  );

  snapshotCanvas.toBlob(async (blob) => {
    if (blob) {
      snapshot.value = new File([blob], "snapshot.png", { type: "image/png" });
      snapshotURL.value = URL.createObjectURL(snapshot.value); // Generate a URL for preview

      // Start uploading
      uploading.value = true;
      try {
        await uploadFile(snapshot.value); // Call the upload composable
        console.log("Image uploaded successfully");
        if (uploadResponse.value?.url) {
          await livelinessCheck(uploadResponse.value.url);
        }
      } catch (error) {
        showToast({
          title: "Error",
          message: "Upload failed",
          toastType: "error",
          duration: 3000,
        });
      } finally {
        uploading.value = false;

        // Stop the video stream after snapshot and liveliness check
        const stream = video.value?.srcObject as MediaStream;
        if (stream) {
          stream.getTracks().forEach((track) => track.stop()); // Stop all video tracks
        }
        video.value!.srcObject = null; // Clear the video element's srcObject
        webcamRunning.value = false; // Update state
        webcamButtonLabel.value = "ENABLE WEBCAM"; // Reset button label
      }
    }
  });
};


const stopCamera = () => {
  const stream = video.value?.srcObject as MediaStream;
  if (stream) {
    stream.getTracks().forEach((track) => track.stop()); // Stop all video tracks
  }
  video.value!.srcObject = null; // Clear the video element's srcObject
  webcamRunning.value = false; // Update state
  console.log("Camera stopped");
};

const handleBackButton = () => {
  stopCamera();
  // Optionally navigate back to a specific route
  router.back()
  window.location.href = "/verify"
  // window.history.back(); // Trigger the back navigation
};

onUnmounted(() => {
  stopCamera(); // Ensure the camera stops when the component is destroyed
  window.removeEventListener("popstate", handleBackButton); // Clean up event listener
});

onMounted(() => {
  createFaceLandmarker();
  router.beforeEach((to, from, next) => {
    stopCamera(); // Stop the camera before navigating
    next(); // Allow navigation
  });
  window.addEventListener("popstate", handleBackButton); // Listen for back button events
});
</script>

<style scoped>
.snapshot-preview img {
  max-width: 100%;
  margin-top: 10px;
}

/* Loader overlay */
.loader-overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 9, 9, 0.8);
  z-index: 10;
}

.loader-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.snapshot-button,
.liveliness-button {
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

.videoView {
  display: flex;
  flex-direction: column;
  align-items: center;
}
video {
  width: 320px;
  height: 240px;
  object-fit: cover;
}
.output_canvas {
  width: 320px;
  height: 240px;
}
</style>
