<template>
    <section id="demos" :class="{ invisible: !isDetectorInitialized }">
      <h1>Face detection using the MediaPipe Face Detector task</h1>
      <h2>Demo: Detecting Faces</h2>
      <p><b>Click on an image below</b> to detect faces in the image.</p>
      <div class="detectOnClick" v-for="src in images" :key="src" @click="handleClick">
        <img :src="src" width="100%" crossorigin="anonymous" />
      </div>
  
      <h2>Demo: Webcam continuous face detection</h2>
      <p>Detect faces from your webcam. When ready click "enable webcam" below and accept access to the webcam.</p>
      <div id="liveView" class="videoView">
        <button v-if="!webcamEnabled" @click="enableWebcam" class="mdc-button mdc-button--raised">
          <span class="mdc-button__ripple"></span>
          <span class="mdc-button__label">ENABLE WEBCAM</span>
        </button>
        <video ref="video" id="webcam" autoplay playsinline v-show="webcamEnabled"></video>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, reactive } from 'vue'
  import { FaceDetector, FilesetResolver, Detection } from '@mediapipe/tasks-vision'
  
  const isDetectorInitialized = ref(false)
  const faceDetector = ref<FaceDetector | null>(null)
  const runningMode = ref('IMAGE')
  const images = [
    'https://assets.codepen.io/9177687/female-4572747_640.jpg',
    'https://assets.codepen.io/9177687/idea-gcbe74dc69_1920.jpg'
  ]
  const webcamEnabled = ref(false)
  const video = ref<HTMLVideoElement | null>(null)
  const children = reactive<Element[]>([])
  let lastVideoTime = -1
  
  onMounted(async () => {
    try {
      const vision = await FilesetResolver.forVisionTasks(
        'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm'
      )
      faceDetector.value = await FaceDetector.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_detector/blaze_face_short_range/float16/1/blaze_face_short_range.tflite`,
          delegate: 'GPU',
        },
        runningMode: runningMode.value,
      })
      isDetectorInitialized.value = true
      console.log("Face detector initialized successfully.")
    } catch (error) {
      console.error("Error initializing face detector:", error)
    }
  })
  
  const handleClick = async (event: MouseEvent) => {
    const img = event.currentTarget as HTMLImageElement
    const ratio = img.height / img.naturalHeight
    try {
      const detections = await faceDetector.value?.detect(img)
      displayImageDetections(detections?.detections || [], img, ratio)
    } catch (error) {
      console.error("Error during image face detection:", error)
    }
  }
  
  const displayImageDetections = (detections: Detection[], resultElement: HTMLElement, ratio: number) => {
    detections.forEach(detection => {
      const highlighter = document.createElement('div')
      highlighter.className = 'highlighter'
      highlighter.style.left = `${detection.boundingBox.originX * ratio}px`
      highlighter.style.top = `${detection.boundingBox.originY * ratio}px`
      highlighter.style.width = `${detection.boundingBox.width * ratio}px`
      highlighter.style.height = `${detection.boundingBox.height * ratio}px`
      resultElement.parentNode?.appendChild(highlighter)
      children.push(highlighter)
    })
  }
  
  const enableWebcam = async () => {
    if (!faceDetector.value) {
      alert('Face Detector is still loading. Please try again.')
      return
    }
    webcamEnabled.value = true
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      video.value!.srcObject = stream
      video.value!.addEventListener('loadeddata', predictWebcam)
    } catch (err) {
      console.error("Error accessing webcam:", err)
    }
  }
  
  const predictWebcam = async () => {
    if (!faceDetector.value) return
    if (runningMode.value === 'IMAGE') {
      runningMode.value = 'VIDEO'
      await faceDetector.value.setOptions({ runningMode: 'VIDEO' })
    }
  
    try {
      const startTimeMs = performance.now()
  
      // Ensure video and time update
      if (video.value?.currentTime !== lastVideoTime) {
        lastVideoTime = video.value.currentTime
  
        // Attempt face detection
        const results = await faceDetector.value.detectForVideo(video.value, startTimeMs)
        
        if (results && results.detections) {
          displayVideoDetections(results.detections)
        } else {
          console.warn("No detections found.")
        }
      }
  
      // Keep predicting when the browser is ready
      window.requestAnimationFrame(predictWebcam)
  
    } catch (error) {
      console.error("Error during video face detection:", error)
    }
  }
  
  const displayVideoDetections = (detections: Detection[]) => {
    // Clear previous detections
    children.forEach(child => document.getElementById('liveView')?.removeChild(child))
    children.splice(0)
  
    // Draw new detections
    detections.forEach(detection => {
      const highlighter = document.createElement('div')
      highlighter.className = 'highlighter'
      highlighter.style.left = `${detection.boundingBox.originX}px`
      highlighter.style.top = `${detection.boundingBox.originY}px`
      highlighter.style.width = `${detection.boundingBox.width}px`
      highlighter.style.height = `${detection.boundingBox.height}px`
      document.getElementById('liveView')?.appendChild(highlighter)
      children.push(highlighter)
    })
  }
  </script>
  
  <style scoped>
  @import "https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css";
  
  body {
    font-family: Roboto, sans-serif;
    color: #3d3d3d;
  }
  
  h1 {
    color: #007f8b;
  }
  
  .videoView,
  .detectOnClick {
    position: relative;
    float: left;
    width: 48%;
    margin: 2% 1%;
    cursor: pointer;
  }
  
  .highlighter {
    position: absolute;
    background: rgba(0, 255, 0, 0.25);
    border: 1px dashed #fff;
    z-index: 1;
  }
  </style>
  