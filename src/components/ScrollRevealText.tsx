import { useRef } from 'react'
import type { CSSProperties } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import type { MotionValue } from 'motion/react'

function Char({
  progress,
  range,
  children,
}: {
  progress: MotionValue<number>
  range: [number, number]
  children: string
}) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return <motion.span style={{ opacity }}>{children}</motion.span>
}

export default function ScrollRevealText({
  text,
  className = '',
  style,
}: {
  text: string
  className?: string
  style?: CSSProperties
}) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.98', 'center 0.78'],
  })

  const chars = text.split('')
  const total = chars.length

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((c, i) => {
        const cp = i / total
        const range: [number, number] = [Math.max(0, cp - 0.1), Math.min(1, cp + 0.05)]
        return (
          <Char key={i} progress={scrollYProgress} range={range}>
            {c}
          </Char>
        )
      })}
    </p>
  )
}
