import { useEffect, useRef, useState } from 'react'

interface Props {
  src: string
  className?: string
  alt: string
}

export default function FadeImg({ src, className = '', alt }: Props) {
  const imgRef = useRef<HTMLImageElement | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return

    // Handles cached images
    if (img.complete && img.naturalWidth !== 0) {
      setLoaded(true)
      console.log('loaded from cache')
      return
    }

    // not loaded yet -> wait for event
    const onLoad = () => {
      console.log('loaded from event listener')
      setLoaded(true)
    }
    img.addEventListener('load', onLoad)
    return () => img.removeEventListener('load', onLoad)
  }, [src])

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      loading="lazy"
      className={`transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
    />
  )
}
