<template>
  <div class="container mx-auto px-6 py-8">
    <h1 class="text-4xl font-cyber text-cyan-400 mb-8 text-center">
      Cyberpunk Card Compact
    </h1>
    <div
      class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6 justify-items-center"
    >
      <div
        v-for="card in cards"
        :key="card.title"
        @click="openModal(card)"
        class="cursor-pointer hover:scale-105 transition-transform duration-300"
        :style="{
          width: `${CARD_WIDTH * SCALE}px`,
          height: `${CARD_HEIGHT * SCALE}px`,
        }"
      >
        <CyberCard :card="card" :scale="SCALE" />
      </div>
    </div>

    <CardModal v-if="selectedCard" :card="selectedCard" @close="closeModal" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { cards } from "../data/cardData";
import CyberCard from "./CyberCard.vue";
import CardModal from "./CardModal.vue";

// Constants for card dimensions
const CARD_WIDTH = 340; // Original card width
const CARD_HEIGHT = 520; // Original card height
const SCALE = 0.3; // 30% of original size

const selectedCard = ref(null);

const openModal = (card) => {
  selectedCard.value = card;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  selectedCard.value = null;
  document.body.style.overflow = "auto";
};
</script>
