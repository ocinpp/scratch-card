<template>
  <div class="container mx-auto px-16 py-8">
    <h1 class="text-4xl font-cyber text-cyan-400 mb-8 text-center">
      Cyberpunk Card Collection
    </h1>
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center"
    >
      <div
        v-for="card in cards"
        :key="card.title"
        class="hover:scale-105 transition-transform duration-300"
        ref="tiltRef"
      >
        <CyberCard :card="card" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { cards } from "../data/cardData";
import CyberCard from "./CyberCard.vue";
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
}
</style>
