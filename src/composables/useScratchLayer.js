export const SCRATCH_PATTERN = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjMWExYTFhIi8+PHBhdGggZD0iTTAgMGw1MCA1ME0wIDI1bDI1IDI1TTI1IDBsLTI1IDI1TTUwIDBsLTUwIDUwTTUwIDI1bC0yNSAyNU0yNSA1MGwyNS0yNSIgc3Ryb2tlPSIjMDBmZjQ0IiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+`;

export function useScratchLayer() {
  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  };

  const drawScratchLayer = async (canvas) => {
    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      willReadFrequently: true,
    });

    if (!ctx) return;

    try {
      const img = await loadImage(SCRATCH_PATTERN);
      ctx.fillStyle = "#1a1a1a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const pattern = ctx.createPattern(img, "repeat");
      if (pattern) {
        ctx.globalAlpha = 1;
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;
      }
    } catch (error) {
      console.error("Error loading scratch layer image:", error);
      // Fallback to solid color if pattern fails
      ctx.fillStyle = "#1a1a1a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

  return {
    drawScratchLayer,
  };
}
