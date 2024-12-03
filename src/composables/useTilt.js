import VanillaTilt from 'vanilla-tilt'
import { onMounted, onBeforeUnmount } from 'vue'

export function useTilt(elementRef, isRevealed) {
  let tiltInstance = null

  const initTilt = () => {
    if (!elementRef.value || !isRevealed.value) return

    tiltInstance = VanillaTilt.init(elementRef.value, {
      max: 10,
      speed: 400,
      perspective: 1000,
      scale: 1.02,
      transition: true,
      gyroscope: true
    })
  }

  const destroyTilt = () => {
    if (tiltInstance && elementRef.value) {
      elementRef.value.vanillaTilt.destroy()
      tiltInstance = null
    }
  }

  onMounted(() => {
    if (isRevealed.value) {
      initTilt()
    }
  })

  onBeforeUnmount(() => {
    destroyTilt()
  })

  return {
    initTilt,
    destroyTilt
  }
}