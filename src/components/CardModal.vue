<template>
  <div
    class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    @click.self="$emit('close')"
  >
    <div class="relative animate-modal-in">
      <button
        @click="$emit('close')"
        class="absolute -top-4 -right-4 w-8 h-8 bg-cyan-500 text-black rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors z-10"
      >
        ✕
      </button>
      <CyberCard :card="card" />
    </div>
  </div>
</template>

<script setup>
import CyberCard from "./CyberCard.vue";

defineProps({
  card: {
    type: Object,
    required: true,
  },
});

defineEmits(["close"]);
</script>

<style scoped>
.animate-modal-in {
  animation: modal-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes modal-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
