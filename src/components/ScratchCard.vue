<template>
  <div class="h-dvh flex items-center justify-center">
    <div class="container mx-auto">
      <div class="w-[340px] mx-auto flex flex-col items-center">
        <div ref="tiltRef">
          <div class="relative">
            <div class="relative" ref="containerRef">
              <!-- Content Layer -->
              <div
                class="transition-all duration-500"
                :style="{
                  opacity: isRevealed ? 1 : scratchedPercentage > 0 ? 0.3 : 0,
                  transform: isRevealed ? 'scale(1)' : 'scale(0.98)',
                }"
                ref="cardRef"
              >
                <CyberCard :card="cardData" />
              </div>

              <!-- Scratch Indicator -->
              <ScratchIndicator
                v-if="!isRevealed && scratchedPercentage === 0"
              />

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

        <!-- Save Button (outside tilt container) -->
        <button
          v-if="isRevealed"
          @click="saveImage"
          class="mt-4 w-full bg-cyan-500 hover:bg-cyan-400 text-black font-cyber py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Save Card
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { toPng } from "html-to-image";
import { cardData } from "../data/cardData";
import { useCanvas } from "../composables/useCanvas";
import { useScratchDetection } from "../composables/useScratchDetection";
import { useScratchEvents } from "../composables/useScratchEvents";
import { useTilt } from "../composables/useTilt";
import { useConfetti } from "../composables/useConfetti";
import CyberCard from "./CyberCard.vue";
import ScratchIndicator from "./ScratchIndicator.vue";

const tiltRef = ref(null);
const containerRef = ref(null);
const canvasRef = ref(null);
const cardRef = ref(null);

const { initCanvas, clearArea, clearCanvas } = useCanvas();
const { fire: fireConfetti } = useConfetti();
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
    fireConfetti();
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

const saveImage = async () => {
  try {
    if (!cardRef.value) return;

    const dataUrl = await toPng(cardRef.value, {
      quality: 1.0,
      pixelRatio: 2,
    });

    const link = document.createElement("a");
    link.download = `${cardData.title.toLowerCase().replace(/\s+/g, "-")}.png`;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error("Error saving image:", error);
  }
};

onMounted(async () => {
  await nextTick();
  if (containerRef.value && canvasRef.value) {
    initCanvas(canvasRef.value, containerRef.value);
  }
});
</script>

<style>
canvas {
  touch-action: none;
}
</style>
