import { useLayoutEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { projects } from '../data'
import ProjectCard from './ProjectCard'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

function Intro() {
  const { t } = useTranslation()
  return (
    <div className="flex h-[62vh] max-h-[460px] w-[78vw] max-w-[440px] shrink-0 flex-col justify-center pr-6">
      <WordsPullUpMultiStyle
        key={t('work.h1')}
        className="justify-start text-left text-4xl font-medium leading-[0.95] sm:text-5xl lg:text-6xl"
        segments={[{ text: t('work.h1'), className: 'text-primary' }]}
      />
      <p className="mt-5 max-w-xs text-base text-gray-500">{t('work.h2')}</p>
    </div>
  )
}

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [distance, setDistance] = useState(0)
  const [reduce, setReduce] = useState(false)

  useLayoutEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const measure = () => {
      setReduce(mq.matches)
      if (trackRef.current) {
        setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth))
      }
    }
    measure()
    window.addEventListener('resize', measure)
    mq.addEventListener('change', measure)
    return () => {
      window.removeEventListener('resize', measure)
      mq.removeEventListener('change', measure)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance])

  if (reduce) {
    return (
      <section id="work" className="bg-black py-24 md:py-32">
        <div className="mx-auto mb-10 max-w-7xl px-6 sm:px-10">
          <Intro />
        </div>
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 sm:px-10">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: `calc(100vh + ${distance}px)` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex items-stretch gap-5 pl-6 pr-[12vw] will-change-transform sm:gap-6 sm:pl-10 lg:pl-16"
        >
          <Intro />
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
