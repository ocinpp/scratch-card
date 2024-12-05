<template>
  <div ref="tiltRef" class="w-full max-w-md mx-auto">
    <div
      class="relative bg-gradient-to-r from-purple-900 via-cyan-900 to-indigo-900 rounded-xl overflow-hidden shadow-2xl"
    >
      <div class="relative" ref="containerRef">
        <!-- Content Layer -->
        <div
          class="p-6 min-h-[500px] flex flex-col transition-all duration-500"
          :style="{
            opacity: isRevealed ? 1 : 0.3,
            transform: isRevealed ? 'scale(1)' : 'scale(0.98)',
          }"
        >
          <div class="flex-1 select-none">
            <img
              :src="cardData.image"
              :alt="cardData.title"
              class="w-full h-64 object-cover rounded-lg mb-4 border-2 border-cyan-500 shadow-lg shadow-cyan-500/50"
            />
            <h2 class="text-3xl font-bold mb-3 text-cyan-400 font-cyber">
              {{ cardData.title }}
            </h2>
            <p
              class="text-cyan-300 mb-6 leading-relaxed font-tech text-sm tracking-tight"
            >
              {{ cardData.description }}
            </p>
          </div>
          <div
            class="text-xs text-cyan-500 border-t border-cyan-800 pt-4 mt-4 select-none font-cyber-alt opacity-70"
          >
            © 1970 CyberScratch Industries. All rights reserved.
          </div>
        </div>

        <!-- Scratch Canvas Layer -->
        <canvas
          ref="canvasRef"
          @mousedown="startScratching"
          @mousemove="scratch"
          @mouseup="stopScratching"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="stopScratching"
          class="absolute inset-0 w-full h-full cursor-pointer touch-none transition-opacity duration-500"
          :class="{ 'pointer-events-none opacity-0': isRevealed }"
          style="z-index: 10"
        ></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { cardData } from "../data/cardData";
import { useCanvas } from "../composables/useCanvas";
import { useScratchDetection } from "../composables/useScratchDetection";
import { useScratchEvents } from "../composables/useScratchEvents";
import { useTilt } from "../composables/useTilt";

const tiltRef = ref(null);
const containerRef = ref(null);
const canvasRef = ref(null);

const { initCanvas, clearArea, clearCanvas } = useCanvas();
const {
  isScratching,
  scratchedPercentage,
  isRevealed,
  updateScratchedPercentage,
  startScratching,
  stopScratching,
} = useScratchDetection();

const handleReveal = () => {
  if (canvasRef.value) {
    clearCanvas(canvasRef.value);
    initTilt();
  }
};

const { scratch, handleTouchStart, handleTouchMove } = useScratchEvents(
  canvasRef,
  isScratching,
  clearArea,
  (canvas) => {
    const shouldReveal = updateScratchedPercentage(canvas);
    if (shouldReveal) {
      handleReveal();
    }
  },
  startScratching
);

const { initTilt } = useTilt(tiltRef, isRevealed);

onMounted(async () => {
  await nextTick();
  if (containerRef.value && canvasRef.value) {
    initCanvas(canvasRef.value, containerRef.value);
  }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Share+Tech+Mono&family=Syncopate:wght@400;700&display=swap");

.font-cyber {
  font-family: "Orbitron", sans-serif;
}

.font-tech {
  font-family: "Share Tech Mono", monospace;
}

.font-cyber-alt {
  font-family: "Syncopate", sans-serif;
  letter-spacing: -0.5px;
}

canvas {
  touch-action: none;
}
</style>
