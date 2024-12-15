<template>
  <div
    class="bg-gradient-to-r from-purple-900 via-cyan-900 to-indigo-900 rounded-xl overflow-hidden shadow-2xl"
    :style="{
      width: `${340 * scale}px`,
      height: `${520 * scale}px`,
    }"
  >
    <div :style="{ padding: `${24 * scale}px` }" class="h-full flex flex-col">
      <div class="flex-1 select-none">
        <img
          :src="card.image"
          :alt="card.title"
          :style="{
            height: `${192 * scale}px`,
            marginBottom: `${16 * scale}px`,
            borderWidth: `${2 * scale}px`,
          }"
          class="w-full object-cover rounded-lg border-cyan-500 shadow-lg shadow-cyan-500/50"
        />
        <h2
          :style="{
            fontSize: `${24 * scale}px`,
            marginBottom: `${12 * scale}px`,
            lineHeight: `${28 * scale}px`,
          }"
          class="font-bold text-cyan-400 font-cyber"
        >
          {{ card.title }}
        </h2>
        <p
          :style="{
            fontSize: `${14 * scale}px`,
            marginBottom: `${24 * scale}px`,
            lineHeight: `${20 * scale}px`,
          }"
          class="text-cyan-300 font-tech tracking-tight"
        >
          {{ card.description }}
        </p>
      </div>
      <div
        :style="{
          fontSize: `${8 * scale}px`,
          paddingTop: `${16 * scale}px`,
          marginTop: `${16 * scale}px`,
          borderTopWidth: `${1 * scale}px`,
        }"
        class="text-cyan-500 border-cyan-800 select-none font-cyber-alt opacity-70 tracking-tighter"
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
  scale: {
    type: Number,
    default: 1,
  },
});
</script>
