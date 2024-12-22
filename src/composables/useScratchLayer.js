export const SCRATCH_PATTERN = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAG1BMVEUVQyEXNR8ZHxsZIBsaGhoaHBoaHRsaHhv/////9Gr7AAAAAWJLR0QIht6VegAAANlJREFUOMuNkkEOQiEMRBtvYIyy/Qsv4BVM5R5N/hGI53cBtKVlEllBOgNl+ujBuurd9iwkzQ7NqQrVYgdvaWTK1cKk0mBhUm2wME1xtDBNdbQwjU2yMI1dsvRKLdnSKyyvZBmV98VbTt575sX5ndlL6k016T8qiRnYtTE3+3HI2nUS5uNCWmfqQ1o58Lku7Hx9ruR5u552+MCKoNsiiSaLJKoskzhlmcQh25HYZTsSa4EkSkMk1gJJlIZIrDdI4vHkPzz4Hdgb/g/MAOcGs8bzgTPFHGB2IG8/VQ9T7xHXsKQAAAAASUVORK5CYII=`;

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
