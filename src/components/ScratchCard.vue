<template>
  <div class="min-h-dvh flex items-center justify-center">
    <div class="container mx-auto">
      <div ref="tiltRef" class="w-[340px] mx-auto">
        <div class="relative">
          <div class="relative" ref="containerRef">
            <!-- Content Layer -->
            <div
              class="transition-all duration-500"
              :style="{
                opacity: isRevealed ? 1 : scratchedPercentage > 0 ? 0.3 : 0,
                transform: isRevealed ? 'scale(1)' : 'scale(0.98)',
              }"
            >
              <CyberCard :card="cardData" />
            </div>

            <!-- Scratch Indicator -->
            <ScratchIndicator v-if="!isRevealed && scratchedPercentage === 0" />

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
import { useConfetti } from "../composables/useConfetti";
import CyberCard from "./CyberCard.vue";
import ScratchIndicator from "./ScratchIndicator.vue";

const tiltRef = ref(null);
const containerRef = ref(null);
const canvasRef = ref(null);

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
