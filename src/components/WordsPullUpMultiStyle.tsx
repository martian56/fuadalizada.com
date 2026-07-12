import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

interface Segment {
  text: string
  className?: string
}

interface Props {
  segments: Segment[]
  className?: string
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function WordsPullUpMultiStyle({ segments, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  const words: { word: string; cls: string }[] = []
  segments.forEach((seg) => {
    seg.text.split(' ').forEach((w) => words.push({ word: w, cls: seg.className ?? '' }))
  })

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map(({ word, cls }, i) => (
        <motion.span
          key={i}
          className={`inline-block ${cls}`}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : undefined}
          transition={{ delay: i * 0.08, duration: 0.6, ease: EASE }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </div>
  )
}
