import Notch from '../types/notch'

const notchesMQ = (notches: Notch[], targetWidth: number): number => {
  for (const notch of notches) {
    if (targetWidth < notch.width) {
      if (notch.fluid) {
        return targetWidth
      } else {
        return notch.width
      }
    }
  }

  return 0
}

export default notchesMQ
