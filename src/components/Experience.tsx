import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import type { Role } from '../data'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

function Row({ period, role, company, desc, delay }: Role & { delay: number }) {
  return (
    <motion.li
      className="grid grid-cols-1 gap-1.5 border-t border-white/10 py-6 md:grid-cols-[180px_1fr] md:gap-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      <span className="pt-1 text-sm text-gray-500">{period}</span>
      <div>
        <h4 className="text-lg font-medium text-primary sm:text-xl">
          {role} <span className="text-primary/45">· {company}</span>
        </h4>
        <p className="mt-1 text-sm text-gray-400">{desc}</p>
      </div>
    </motion.li>
  )
}

export default function Experience() {
  const { t } = useTranslation()
  const items = t('experience.items', { returnObjects: true }) as Role[]
  const edu = t('experience.edu', { returnObjects: true }) as Role[]

  return (
    <section id="experience" className="bg-black px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 md:mb-16">
          <WordsPullUpMultiStyle
            key={t('experience.h1')}
            className="justify-start text-left text-2xl font-normal sm:text-3xl md:text-4xl lg:text-5xl"
            segments={[
              { text: t('experience.h1'), className: 'text-primary' },
              { text: t('experience.h2'), className: 'text-gray-500' },
            ]}
          />
        </div>

        <ol>
          {items.map((j, i) => (
            <Row key={j.role + j.company} {...j} delay={i * 0.05} />
          ))}
        </ol>

        <h3 className="mb-2 mt-16 text-xs uppercase tracking-[0.2em] text-primary/60">
          {t('experience.education')}
        </h3>
        <ol>
          {edu.map((e, i) => (
            <Row key={e.company} {...e} delay={i * 0.05} />
          ))}
        </ol>
      </div>
    </section>
  )
}
