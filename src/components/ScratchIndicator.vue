<template>
  <div
    class="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
  >
    <div>
      <svg width="300" height="64" viewBox="0 0 24 24" class="text-cyan-400">
        <!-- Hand -->
        <g
          class="animate-hand"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
        >
          <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
          <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
          <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
          <path
            d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.animate-scratch-hint {
  animation: float 2s ease-in-out infinite;
}

.animate-hand {
  animation: swipe 3s ease-in-out infinite;
}

@keyframes swipe {
  0%,
  100% {
    transform: translateX(-15px);
  }
  50% {
    transform: translateX(15px);
  }
}

@keyframes fade {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
