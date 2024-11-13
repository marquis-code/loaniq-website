<template>
  <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <div class="face-verification" v-if="!loading">
        <video
          ref="video"
          autoplay
          @loadeddata="onVideoLoaded"
          class="video-feed"
        />
        <canvas ref="canvas" class="canvas-overlay" />

        <div class="snapshot-controls z-50">
          <button
            :disabled="uploading"
            v-if="isFaceDetected"
            @click="takeSnapshot"
            class="snapshot-button disabled:cursor-not-allowed disabled:opacity-25 pt-3 flex bg-black text-white border font-medium z-50 px-4 pb-4 justify-center items-center rounded-lg text-sm gap-x-3"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(2 3)"><path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z"/><circle cx="10" cy="10" r="4"/></g></svg>
          <span class="">{{ uploading ? 'processing...' : 'Take Snapshot' }}</span>
          </button>
        </div>

        <div v-if="snapshot" class="snapshot-preview">
          <h3>Face Snapshot</h3>
          <img :src="snapshot" alt="Detected Face Snapshot" />
          <button @click="performLivelinessCheck" class="liveliness-button">
            Perform Liveliness Check
          </button>
        </div>
      </div>

  
      <div v-if="loading" class="loader-overlay p-10 z-50 ">
        <div
          class="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible"
        >
          <svg
            class="w-16 h-16 animate-spin text-gray-900/50"
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
            <path
              d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-gray-900"
            ></path>
          </svg>
        </div>
        <p>Please wait while we perform liveliness check</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useLivelinessCheck } from "@/composables/auth/liveliness_check";
import { useUploadFile } from "@/composables/core/upload";
import "@mediapipe/face_detection";
import "@tensorflow/tfjs-core";
import * as faceDetection from "@tensorflow-models/face-detection";
import "@tensorflow/tfjs-backend-webgl";
import { useCustomToast } from "@/composables/core/useCustomToast";

const router = useRouter();
const { uploadFile, loading: uploading, uploadResponse } = useUploadFile();
const { loading: livelinessLoading, livelinessCheck } = useLivelinessCheck();
const { showToast } = useCustomToast();

const isModalOpen = ref(true);
const video = ref<HTMLVideoElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);
const isFaceDetected = ref(false);
let detectedFace: faceDetection.Face | null = null;
let faceDetector: faceDetection.FaceDetector | null = null;

const loading = ref(false); // Controls the loader display

const constraints = {
  video: {
    width: 640,
    height: 480,
  },
  audio: false,
};

// Initialize the camera
const setupCamera = async () => {
  if (video.value) {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    video.value.srcObject = stream;
  }
};

const setupModel = async () => {
  const model = faceDetection.SupportedModels.MediaPipeFaceDetector;
  const detectorConfig = {
    runtime: "mediapipe",
    modelType: "full", // 'short' or 'full' based on desired accuracy and speed
    solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/face_detection",
    maxFaces: 1, // Detect only one face; increase for multiple face detection
    minDetectionConfidence: 0.7, // Adjust to balance detection sensitivity
    minSuppressionThreshold: 0.3, // For non-max suppression when detecting multiple faces
    withFaceLandmarks: true
  };

  try {
    faceDetector = await faceDetection.createDetector(model, detectorConfig);
  } catch (error) {
    console.error("Error initializing face detector:", error);
    showToast({
      title: "Error",
      message: "Failed to load face detection model.",
      toastType: "error",
      duration: 3000,
    });
  }
};


// Setup the canvas dimensions
const setupCanvas = () => {
  if (canvas.value) {
    canvas.value.width = constraints.video.width;
    canvas.value.height = constraints.video.height;
  }
};

// Function to close the modal
const closeModal = () => {
  isModalOpen.value = false;
};

// Function to take a snapshot of the current detected face and convert to File
const takeSnapshot = async () => {
  if (!canvas.value || !detectedFace || !video.value) return;

  const ctx = canvas.value.getContext("2d");
  if (!ctx) return;

  const { xMin, yMin, width, height } = detectedFace.box;

  ctx.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);

  const faceCanvas = document.createElement("canvas");
  faceCanvas.width = width;
  faceCanvas.height = height;

  const faceCtx = faceCanvas.getContext("2d");
  if (faceCtx) {
    faceCtx.drawImage(
      canvas.value,
      xMin,
      yMin,
      width,
      height,
      0,
      0,
      width,
      height
    );

    const blob = await new Promise<Blob | null>((resolve) => {
      faceCanvas.toBlob((blob) => resolve(blob), "image/jpeg", 0.95);
    });

    if (blob) {
      const file = new File([blob], "captured-image.jpg", {
        type: "image/jpeg",
      });
      await uploadCapturedImage(file);
    }
  }
};

// Function to upload the captured image and perform liveliness check
const uploadCapturedImage = async (file: File) => {
  try {
    await uploadFile(file);
    if (uploadResponse.value?.url) {
      showLoaderAndRedirect(); // Show loader before performing liveliness check
      await livelinessCheck(uploadResponse.value.url);
    }
  } catch (error) {
    console.error("Error during image upload or liveliness check:", error);
    showToast({
      title: "Error",
      message: "Failed to perform liveliness check.",
      toastType: "error",
      duration: 3000,
    });
  }
};


// Function to show loader, wait, and then redirect
const showLoaderAndRedirect = async () => {
  loading.value = true; // Show loader
  console.log(uploadResponse.value.url, 'uel hjere')
  // await livelinessCheck(uploadResponse.value.url);
  // await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait for 3 seconds
  // loading.value = false; // Hide loader
  // closeModal()
  // router.push("/create-password"); // Redirect to homepage
};

// // Function to draw bounding boxes and update face detection state
// const drawFaceBounds = async () => {
//   if (!video.value || !canvas.value || !faceDetector) return;

//   const ctx = canvas.value.getContext("2d");
//   if (!ctx) return;

//   const faces = await faceDetector.estimateFaces(video.value);

//   ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
//   ctx.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);

//   if (faces.length > 0) {
//     isFaceDetected.value = true;
//     detectedFace = faces[0];

//     faces.forEach((face) => {
//       const { xMin, yMin, width, height } = face.box;
//       ctx.strokeStyle = "red";
//       ctx.lineWidth = 2;
//       ctx.strokeRect(xMin, yMin, width, height);
//     });
//   } else {
//     if (isFaceDetected.value) {
//       showToast({
//         title: "Error",
//         message: "No face detected. Please adjust your position.",
//         toastType: "error",
//         duration: 3000,
//       });
//     }
//     isFaceDetected.value = false;
//     detectedFace = null;
//   }

//   window.requestAnimationFrame(drawFaceBounds);
// };

const drawFaceBounds = async () => {
  if (!video.value || !canvas.value || !faceDetector) return;

  const ctx = canvas.value.getContext("2d");
  if (!ctx) return;

  const faces = await faceDetector.estimateFaces(video.value, { flipHorizontal: false });

  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
  ctx.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);

  if (faces.length > 0) {
    isFaceDetected.value = true;
    detectedFace = faces[0];

    faces.forEach((face) => {
      const { xMin, yMin, width, height } = face.box;
      
      // Draw the bounding box
      ctx.strokeStyle = "red";
      ctx.lineWidth = 2;
      ctx.strokeRect(xMin, yMin, width, height);

      // Draw landmarks (face points)
      if (face.keypoints) {
        ctx.fillStyle = "blue"; // Color for landmarks
        face.keypoints.forEach((keypoint) => {
          const { x, y } = keypoint;
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, 2 * Math.PI); // Draw a small circle for each landmark
          ctx.fill();
        });
      }
    });
  } else {
    if (isFaceDetected.value) {
      showToast({
        title: "Error",
        message: "No face detected. Please adjust your position.",
        toastType: "error",
        duration: 3000,
      });
    }
    isFaceDetected.value = false;
    detectedFace = null;
  }

  window.requestAnimationFrame(drawFaceBounds);
};



// Start drawing face bounds when the video is loaded
const onVideoLoaded = () => {
  window.requestAnimationFrame(drawFaceBounds);
};

// Setup on component mount
onMounted(async () => {
  await setupModel();
  await setupCamera();
  setupCanvas();
});
</script>

<style scoped>
/* Modal styling */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  padding: 20px;
  border-radius: 50px;
  position: relative;
  width: 80%;
  height: 300px;
  max-width: 700px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.modal-close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
}

/* Face verification layout */
.face-verification {
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.video-container {
  position: relative;
  width: 100%;
  max-width: 640px;
}

.video-feed,
.canvas-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
  border-radius: 10px;
}

.video-feed {
  z-index: 1;
}

.canvas-overlay {
  z-index: 2;
  pointer-events: none;
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
  background-color: rgba(255, 255, 255, 0.8);
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
</style>
