import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import { skills } from '../data'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function Skills() {
  const { t } = useTranslation()

  return (
    <section className="relative bg-black px-4 py-24 sm:px-6 md:py-32">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.1]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 md:mb-16">
          <WordsPullUpMultiStyle
            key={t('skills.h1')}
            className="justify-start text-left text-2xl font-normal sm:text-3xl md:text-4xl lg:text-5xl"
            segments={[{ text: t('skills.h1'), className: 'text-primary' }]}
          />
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((g, gi) => (
            <motion.div
              key={g.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (gi % 3) * 0.08, ease: EASE }}
            >
              <h4 className="mb-4 text-xs uppercase tracking-[0.18em] text-primary/60">
                {t(`skills.groups.${g.id}`)}
              </h4>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-gray-300 transition-colors hover:border-primary/40 hover:text-primary sm:text-sm"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
