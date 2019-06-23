import { useEffect, useRef, useState } from 'react'

const useCurrentWidth = <ElementType extends HTMLElement>() => {
  const ref = useRef<ElementType>({ clientWidth: 0 } as any)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const resizeHandler = () => setWidth(ref.current.clientWidth)
    window.addEventListener('resize', resizeHandler)
    resizeHandler()

    return () => window.removeEventListener('resize', resizeHandler)
  })

  return { width, ref }
}

export default useCurrentWidth
