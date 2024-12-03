export function useScratchEvents(canvasRef, isScratching, clearArea, updateScratchedPercentage, startScratching) {
  const scratch = (event) => {
    if (!isScratching.value || !canvasRef.value) return
    
    const rect = canvasRef.value.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    
    clearArea(canvasRef.value, x, y)
    updateScratchedPercentage(canvasRef.value)
  }

  const handleTouchStart = (event) => {
    event.preventDefault()
    const touch = event.touches[0]
    const rect = canvasRef.value.getBoundingClientRect()
    const x = touch.clientX - rect.left
    const y = touch.clientY - rect.top
    
    startScratching()
    clearArea(canvasRef.value, x, y)
    updateScratchedPercentage(canvasRef.value)
  }

  const handleTouchMove = (event) => {
    event.preventDefault()
    if (!isScratching.value || !canvasRef.value) return

    const touch = event.touches[0]
    const rect = canvasRef.value.getBoundingClientRect()
    const x = touch.clientX - rect.left
    const y = touch.clientY - rect.top
    
    clearArea(canvasRef.value, x, y)
    updateScratchedPercentage(canvasRef.value)
  }

  return {
    scratch,
    handleTouchStart,
    handleTouchMove
  }
}