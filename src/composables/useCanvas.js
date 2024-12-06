import { useScratchLayer } from "./useScratchLayer";

export function useCanvas() {
  const { drawScratchLayer } = useScratchLayer();

  const initCanvas = async (canvas, container) => {
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", {
      willReadFrequently: true,
    });

    if (!ctx) return;

    // Set canvas size to match parent element
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    // Draw the scratch layer with cyberpunk pattern
    await drawScratchLayer(canvas);
  };

  const clearArea = (canvas, x, y) => {
    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      willReadFrequently: true,
    });
    if (!ctx) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.fill();
  };

  const clearCanvas = (canvas) => {
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return {
    initCanvas,
    clearArea,
    clearCanvas,
  };
}
