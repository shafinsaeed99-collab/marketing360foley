import { useRef, useEffect, useCallback } from "react"

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4"

const FADE_DURATION = 500 // 0.5s in ms

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number | null>(null)

  const fadeIn = useCallback(() => {
    const video = videoRef.current
    if (!video) return

    const start = performance.now()
    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / FADE_DURATION, 1)
      video.style.opacity = String(progress)
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step)
      }
    }
    rafRef.current = requestAnimationFrame(step)
  }, [])

  const fadeOut = useCallback(() => {
    const video = videoRef.current
    if (!video) return

    const start = performance.now()
    const startOpacity = parseFloat(video.style.opacity || "1")
    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / FADE_DURATION, 1)
      video.style.opacity = String(startOpacity * (1 - progress))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step)
      }
    }
    rafRef.current = requestAnimationFrame(step)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Fade in when playback starts
    const handlePlay = () => fadeIn()

    // Fade out near the end of playback
    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.5) {
        fadeOut()
      }
    }

    // On ended: reset opacity, wait 100ms, replay from 0
    const handleEnded = () => {
      video.style.opacity = "0"
      setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
      }, 100)
    }

    video.addEventListener("play", handlePlay)
    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("ended", handleEnded)

    // Auto-play on mount
    video.play().catch(() => {})

    return () => {
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("ended", handleEnded)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [fadeIn, fadeOut])

  return (
    <>
      {/* SVG Duotone Filter for Light Mode: maps video pipes into exact Deep Indigo (#4338ca) -> Brand Purple (#7c3aed) -> White */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <filter id="lightModeBrandPipes" colorInterpolationFilters="sRGB">
          {/* Step 1: Invert video colors and adjust black/white levels */}
          <feColorMatrix
            type="matrix"
            values="
              -1.2 0 0 0 1.05
              0 -1.2 0 0 1.05
              0 0 -1.2 0 1.05
              0 0 0 1 0
            "
            result="inverted"
          />
          {/* Step 2: Convert to luminance map */}
          <feColorMatrix
            in="inverted"
            type="matrix"
            values="
              0.2126 0.7152 0.0722 0 0
              0.2126 0.7152 0.0722 0 0
              0.2126 0.7152 0.0722 0 0
              0 0 0 1 0
            "
            result="gray"
          />
          {/* Step 3: Map luminance directly into Deep Indigo (#4338ca) -> Brand Purple (#7c3aed) -> White (#ffffff) */}
          <feComponentTransfer in="gray">
            <feFuncR type="table" tableValues="0.26 0.43 0.55 0.85 1.0" />
            <feFuncG type="table" tableValues="0.22 0.22 0.25 0.75 1.0" />
            <feFuncB type="table" tableValues="0.79 0.85 0.93 0.98 1.0" />
          </feComponentTransfer>
        </filter>
      </svg>

      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        className="hero-video absolute inset-0 w-full h-full object-cover pointer-events-none z-[1]"
        style={{ opacity: 0 }}
      />
    </>
  )
}
