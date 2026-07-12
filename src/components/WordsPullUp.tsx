import { useRef } from 'react'
import type { CSSProperties } from 'react'
import { motion, useInView } from 'motion/react'

interface Props {
  text: string
  className?: string
  style?: CSSProperties
  showAsterisk?: boolean
  delayOffset?: number
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function WordsPullUp({
  text,
  className = '',
  style,
  showAsterisk = false,
  delayOffset = 0,
}: Props) {
  const words = text.split(' ')
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <span ref={ref} className={className} style={style}>
      {words.map((word, i) => {
        const last = i === words.length - 1
        return (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : undefined}
            transition={{ delay: delayOffset + i * 0.08, duration: 0.6, ease: EASE }}
          >
            {last && showAsterisk ? (
              <span className="relative inline-block">
                {word}
                <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
              </span>
            ) : (
              word
            )}
            {!last && ' '}
          </motion.span>
        )
      })}
    </span>
  )
}
