import { useEffect, useState } from 'react'

/**
 * Probes whether an image actually loads at `src`. Used to keep the project
 * cards' "View screenshot" trigger hidden until a real file has been placed
 * at the expected static path (see `Project.screenshot` in `src/data/projects.ts`) —
 * so the feature can be wired up ahead of time without ever surfacing a
 * broken-image state to visitors.
 */
export function useImageExists(src: string | undefined): boolean {
  const [exists, setExists] = useState(false)

  useEffect(() => {
    if (!src) {
      setExists(false)
      return
    }

    let cancelled = false
    const img = new Image()
    img.onload = () => {
      if (!cancelled) setExists(true)
    }
    img.onerror = () => {
      if (!cancelled) setExists(false)
    }
    img.src = src

    return () => {
      cancelled = true
    }
  }, [src])

  return exists
}
