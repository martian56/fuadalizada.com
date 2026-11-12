import { useEffect, useState } from 'react'

// Live GitHub star counts. Results are cached in localStorage for an hour so
// reloads don't eat into GitHub's 60 requests/hour limit for anonymous calls.
const TTL = 60 * 60 * 1000
const inflight = new Map<string, Promise<number | null>>()

function repoPath(url?: string): string | null {
  const m = url?.match(/^https:\/\/github\.com\/([^/]+)\/([^/#?]+)/)
  return m ? `${m[1]}/${m[2]}` : null
}

function readCache(repo: string): number | null {
  try {
    const raw = localStorage.getItem(`stars:${repo}`)
    if (!raw) return null
    const { n, at } = JSON.parse(raw)
    return Date.now() - at < TTL ? n : null
  } catch {
    return null
  }
}

function fetchStars(repo: string): Promise<number | null> {
  let p = inflight.get(repo)
  if (!p) {
    p = fetch(`https://api.github.com/repos/${repo}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        const n = typeof d?.stargazers_count === 'number' ? d.stargazers_count : null
        if (n !== null) {
          try {
            localStorage.setItem(`stars:${repo}`, JSON.stringify({ n, at: Date.now() }))
          } catch {
            /* storage unavailable */
          }
        }
        return n
      })
      .catch(() => null)
    inflight.set(repo, p)
  }
  return p
}

/** Star count for a GitHub repo URL, or `fallback` until (or unless) it loads. */
export function useStars(githubUrl?: string, fallback: number | null = null): number | null {
  const repo = repoPath(githubUrl)
  const [stars, setStars] = useState<number | null>(() => (repo ? readCache(repo) : null) ?? fallback)

  useEffect(() => {
    if (!repo || readCache(repo) !== null) return
    let alive = true
    fetchStars(repo).then((n) => {
      if (alive && n !== null) setStars(n)
    })
    return () => {
      alive = false
    }
  }, [repo])

  return stars
}
