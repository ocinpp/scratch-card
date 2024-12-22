import { ref } from "vue";

export function useScratchDetection() {
  const isScratching = ref(false);
  const scratchedPercentage = ref(0);
  const isRevealed = ref(false);

  const startScratching = () => {
    if (isRevealed.value) return;
    isScratching.value = true;
  };

  const stopScratching = () => {
    isScratching.value = false;
  };

  const updateScratchedPercentage = (canvas) => {
    if (!canvas || isRevealed.value) return;

    const ctx = canvas.getContext("2d", {
      willReadFrequently: true,
    });

    if (!ctx) return;

    try {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      let transparentPixels = 0;

      for (let i = 0; i < pixels.length; i += 4) {
        if (pixels[i + 3] < 128) {
          transparentPixels++;
        }
      }

      const totalPixels = pixels.length / 4;
      const percentage = (transparentPixels / totalPixels) * 100;
      scratchedPercentage.value = percentage;

      if (percentage >= 70 && !isRevealed.value) {
        isRevealed.value = true;
        return true;
      }
      return false;
    } catch (error) {
      // If we can't read the canvas data (e.g., due to CORS),
      // we'll reveal the card after a certain amount of scratching attempts
      console.warn("Unable to read canvas data:", error);
      isRevealed.value = true;
      return true;
    }
  };

  return {
    isScratching,
    scratchedPercentage,
    isRevealed,
    startScratching,
    stopScratching,
    updateScratchedPercentage,
  };
}
