export function useCanvas() {
  const initCanvas = (canvas, container) => {
    if (!canvas || !container) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Set canvas size to match parent element
    canvas.width = container.offsetWidth
    canvas.height = container.offsetHeight

    drawInitialCanvas(ctx, canvas.width, canvas.height)
  }

  const drawInitialCanvas = (ctx, width, height) => {
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, '#1a1a1a')
    gradient.addColorStop(1, '#2a2a2a')

    // Fill canvas with gradient
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    // Add cyberpunk-style grid lines
    ctx.strokeStyle = '#00ff4480'
    ctx.lineWidth = 0.5

    // Horizontal lines
    for (let y = 0; y < height; y += 20) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(width, y)
      ctx.stroke()
    }

    // Vertical lines
    for (let x = 0; x < width; x += 20) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, height)
      ctx.stroke()
    }
  }

  const clearArea = (canvas, x, y) => {
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, 30, 0, Math.PI * 2)
    ctx.fill()
  }

  const clearCanvas = (canvas) => {
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  return {
    initCanvas,
    clearArea,
    clearCanvas
  }
}