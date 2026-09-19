import { useEffect, useState } from 'react'

/**
 * Probes whether a static file actually exists at `url` via a HEAD request.
 * Used to keep file-backed CTAs (e.g. the résumé download button) hidden
 * until a real file has been placed at the expected `public/` path, so the
 * feature can be wired up ahead of time without ever linking to a 404.
 *
 * Checks the response Content-Type against `expectedType` rather than just
 * `res.ok` — both Vite's dev server and the SPA rewrite in `vercel.json`
 * fall back to serving `index.html` (HTTP 200, `text/html`) for unmatched
 * paths, which would otherwise register as a false positive.
 */
export function useFileExists(url: string, expectedType = 'application/pdf'): boolean {
  const [exists, setExists] = useState(false)

  useEffect(() => {
    let cancelled = false

    fetch(url, { method: 'HEAD' })
      .then((res) => {
        const contentType = res.headers.get('content-type') ?? ''
        const isRealFile = res.ok && contentType.toLowerCase().startsWith(expectedType)
        if (!cancelled) setExists(isRealFile)
      })
      .catch(() => {
        if (!cancelled) setExists(false)
      })

    return () => {
      cancelled = true
    }
  }, [url, expectedType])

  return exists
}
