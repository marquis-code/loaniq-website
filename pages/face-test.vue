<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'
import {
  FaceDetector,
  FilesetResolver,
  Detection
} from "@mediapipe/tasks-vision"

// Props
const props = defineProps<{
  mode: 'image' | 'webcam'
}>()

// Refs
const faceDetector: Ref<FaceDetector | null> = ref(null)
const runningMode = ref(props.mode === 'webcam' ? 'VIDEO' : 'IMAGE')
const webcamEnabled = ref(false)
const videoRef = ref<HTMLVideoElement | null>(null)
const imageContainerRef = ref<HTMLDivElement | null>(null)
const lastVideoTime = ref(-1)
const children = ref<HTMLElement[]>([])

// Initialize face detector
const initializeFaceDetector = async () => {
  try {
    const vision = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
    )
    
    faceDetector.value = await FaceDetector.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite`,
        delegate: "GPU"
      },
      runningMode: runningMode.value
    })
  } catch (error) {
    console.error('Error initializing face detector:', error)
  }
}

// Handle image click detection
const handleImageClick = async (event: MouseEvent) => {
  const target = event.target as HTMLImageElement
  const container = target.parentNode as HTMLElement

  // Clear previous detections
  const highlighters = container.getElementsByClassName('highlighter')
  const infos = container.getElementsByClassName('info')
  const keyPoints = container.getElementsByClassName('key-point')
  
  while (highlighters[0]) highlighters[0].remove()
  while (infos[0]) infos[0].remove()
  while (keyPoints[0]) keyPoints[0].remove()

  if (!faceDetector.value) {
    console.log("Wait for face detector to load")
    return
  }

  try {
    // Ensure we're in IMAGE mode
    if (runningMode.value !== "IMAGE") {
      runningMode.value = "IMAGE"
      await faceDetector.value.setOptions({ runningMode: "IMAGE" })
    }

    const ratio = target.height / target.naturalHeight
    const detections = faceDetector.value.detect(target).detections
    displayImageDetections(detections, target)
  } catch (error) {
    console.error('Error detecting faces in image:', error)
  }
}

// Display detections for images
const displayImageDetections = (detections: Detection[], resultElement: HTMLImageElement) => {
  const ratio = resultElement.height / resultElement.naturalHeight

  detections.forEach((detection: Detection) => {
    // Create confidence text
    const p = document.createElement("p")
    p.setAttribute("class", "info")
    p.innerText = `Confidence: ${Math.round(detection.categories[0].score * 100)}%`
    
    p.style.cssText = `
      left: ${detection.boundingBox.originX * ratio}px;
      top: ${detection.boundingBox.originY * ratio - 30}px;
      width: ${detection.boundingBox.width * ratio - 10}px;
      height: 20px;
    `

    // Create bounding box
    const highlighter = document.createElement("div")
    highlighter.setAttribute("class", "highlighter")
    highlighter.style.cssText = `
      left: ${detection.boundingBox.originX * ratio}px;
      top: ${detection.boundingBox.originY * ratio}px;
      width: ${detection.boundingBox.width * ratio}px;
      height: ${detection.boundingBox.height * ratio}px;
    `

    resultElement.parentNode?.appendChild(highlighter)
    resultElement.parentNode?.appendChild(p)

    // Add keypoints
    detection.keypoints.forEach((keypoint) => {
      const keypointEl = document.createElement("span")
      keypointEl.className = "key-point"
      keypointEl.style.top = `${keypoint.y * resultElement.height - 3}px`
      keypointEl.style.left = `${keypoint.x * resultElement.width - 3}px`
      resultElement.parentNode?.appendChild(keypointEl)
    })
  })
}

// Enable webcam
const enableWebcam = async () => {
  if (!faceDetector.value) {
    alert("Face Detector is still loading. Please try again.")
    return
  }

  try {
    // Ensure we're in VIDEO mode
    if (runningMode.value !== "VIDEO") {
      runningMode.value = "VIDEO"
      await faceDetector.value.setOptions({ runningMode: "VIDEO" })
    }

    const stream = await navigator.mediaDevices.getUserMedia({ video: true })
    if (videoRef.value) {
      videoRef.value.srcObject = stream
      videoRef.value.addEventListener('loadeddata', predictWebcam)
      webcamEnabled.value = true
    }
  } catch (error) {
    console.error('Error accessing webcam:', error)
  }
}

// Predict from webcam feed
const predictWebcam = async () => {
  if (!faceDetector.value || !videoRef.value) return

  const startTimeMs = performance.now()

  if (videoRef.value.currentTime !== lastVideoTime.value) {
    lastVideoTime.value = videoRef.value.currentTime
    const detections = faceDetector.value.detectForVideo(videoRef.value, startTimeMs).detections
    displayVideoDetections(detections)
  }

  requestAnimationFrame(predictWebcam)
}

// Display detections for video
const displayVideoDetections = (detections: Detection[]) => {
  if (!videoRef.value) return

  // Clear previous detections
  children.value.forEach(child => child.remove())
  children.value = []

  detections.forEach((detection: Detection) => {
    // Create confidence text
    const p = document.createElement("p")
    p.innerText = `Confidence: ${Math.round(detection.categories[0].score * 100)}%`
    p.style.cssText = `
      left: ${videoRef.value!.offsetWidth - detection.boundingBox.width - detection.boundingBox.originX}px;
      top: ${detection.boundingBox.originY - 30}px;
      width: ${detection.boundingBox.width - 10}px;
    `

    // Create bounding box
    const highlighter = document.createElement("div")
    highlighter.setAttribute("class", "highlighter")
    highlighter.style.cssText = `
      left: ${videoRef.value!.offsetWidth - detection.boundingBox.width - detection.boundingBox.originX}px;
      top: ${detection.boundingBox.originY}px;
      width: ${detection.boundingBox.width - 10}px;
      height: ${detection.boundingBox.height}px;
    `

    videoRef.value?.parentNode?.appendChild(highlighter)
    videoRef.value?.parentNode?.appendChild(p)
    
    children.value.push(highlighter)
    children.value.push(p)

    // Add keypoints
    detection.keypoints.forEach((keypoint) => {
      const keypointEl = document.createElement("span")
      keypointEl.className = "key-point"
      keypointEl.style.top = `${keypoint.y * videoRef.value!.offsetHeight - 3}px`
      keypointEl.style.left = `${videoRef.value!.offsetWidth - keypoint.x * videoRef.value!.offsetWidth - 3}px`
      videoRef.value?.parentNode?.appendChild(keypointEl)
      children.value.push(keypointEl)
    })
  })
}

// Lifecycle hooks
onMounted(() => {
  initializeFaceDetector()
})

onUnmounted(() => {
  // Clean up video stream if active
  if (videoRef.value?.srcObject) {
    const stream = videoRef.value.srcObject as MediaStream
    stream.getTracks().forEach(track => track.stop())
  }
})
</script>

<template>
  <div class="face-detection">
    <!-- Image detection mode -->
    <template v-if="mode === 'image'">
      <div ref="imageContainerRef" class="detect-on-click">
        <slot @click="handleImageClick"></slot>
      </div>
    </template>

    <!-- Webcam detection mode -->
    <template v-else>
      <div class="video-view">
        <button 
          v-if="!webcamEnabled"
          class="enable-webcam-btn"
          @click="enableWebcam"
        >
          Enable Webcam
        </button>
        <video
          ref="videoRef"
          class="webcam"
          autoplay
          playsinline
        ></video>
      </div>
    </template>
  </div>
</template>

<style scoped>
.face-detection {
  width: 100%;
}

.detect-on-click,
.video-view {
  position: relative;
  width: 100%;
  cursor: pointer;
}

.webcam {
  width: 100%;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
}

.enable-webcam-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  padding: 12px 24px;
  background-color: #007f8b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

:deep(.highlighter) {
  background: rgba(0, 255, 0, 0.25);
  border: 1px dashed #fff;
  z-index: 1;
  position: absolute;
}

:deep(.info) {
  position: absolute;
  padding: 5px;
  background-color: #007f8b;
  color: #fff;
  border: 1px dashed rgba(255, 255, 255, 0.7);
  z-index: 2;
  font-size: 12px;
  margin: 0;
}

:deep(.key-point) {
  position: absolute;
  z-index: 1;
  width: 3px;
  height: 3px;
  background-color: #ff0000;
  border-radius: 50%;
  display: block;
}
</style>