<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-cyber text-cyan-400 mb-8 text-center">
      Cyberpunk Card Countdown
    </h1>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
    >
      <div
        v-for="(card, index) in cards"
        :key="card.title"
        class="hover:scale-105 transition-transform duration-300"
        ref="tiltRef"
      >
        <template v-if="index < REVEALED_CARDS">
          <CyberCard :card="card" />
        </template>
        <template v-else>
          <div
            class="w-[360px] h-[600px] rounded-xl overflow-hidden shadow-2xl relative"
          >
            <div class="absolute inset-0 bg-black/50">
              <div
                class="absolute inset-0 opacity-20"
                :style="{
                  backgroundImage: `url('${SCRATCH_PATTERN}')`,
                  backgroundSize: '50px 50px',
                }"
              ></div>
            </div>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-8xl font-cyber text-cyan-400 animate-pulse">
                {{ cards.length - index }}
              </span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { cards, REVEALED_CARDS } from "../data/cardData";
import { SCRATCH_PATTERN } from "../composables/useScratchLayer";
import CyberCard from "./CyberCard.vue";
</script>

<style scoped>
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
