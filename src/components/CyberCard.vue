<template>
  <div
    class="bg-gradient-to-r from-purple-900 via-cyan-900 to-indigo-900 rounded-xl overflow-hidden shadow-2xl w-[360px] h-[600px]"
  >
    <div class="p-6 h-full flex flex-col">
      <div class="flex-1 select-none">
        <img
          :src="card.image"
          :alt="card.title"
          class="w-full h-48 object-cover rounded-lg mb-4 border-2 border-cyan-500 shadow-lg shadow-cyan-500/50"
        />
        <h2 class="text-3xl font-bold mb-3 text-cyan-400 font-cyber">
          {{ card.title }}
        </h2>
        <p
          class="text-cyan-300 mb-6 leading-relaxed font-tech text-sm tracking-tight"
        >
          {{ card.description }}
        </p>
      </div>
      <div
        class="text-[8px] text-cyan-500 border-t border-cyan-800 pt-4 mt-4 select-none font-cyber-alt opacity-70 tracking-tighter"
      >
        © 1970 CyberScratch Industries. All rights reserved.
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  card: {
    type: Object,
    required: true,
  },
});
</script>
