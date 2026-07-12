import { motion } from 'motion/react'
import { ArrowUpRight, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import { GithubIcon } from './icons'
import { raven } from '../data'

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function Raven() {
  const { t } = useTranslation()

  return (
    <section className="relative bg-black px-4 py-24 sm:px-6 md:py-32">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl md:mb-14">
          <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-primary/60">
            {t('raven.eyebrow')}
          </p>
          <WordsPullUpMultiStyle
            key={t('raven.heading')}
            className="justify-start text-left text-2xl font-normal sm:text-3xl md:text-4xl lg:text-5xl"
            segments={[{ text: t('raven.heading'), className: 'text-primary' }]}
          />
        </div>

        <motion.article
          className="grid grid-cols-1 overflow-hidden rounded-3xl border border-white/10 bg-[#101010] lg:grid-cols-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="order-2 flex flex-col justify-center p-7 sm:p-10 lg:order-1">
            <div className="mb-4 flex items-center gap-4">
              <h3 className="text-3xl font-medium text-primary sm:text-4xl">{raven.title}</h3>
              <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                <Star className="h-3.5 w-3.5 fill-current text-primary" /> {raven.stars}
              </span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-gray-400 sm:text-base">
              {t('raven.desc')}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {raven.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-5">
              <a
                href={raven.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-[1.03]"
              >
                {t('raven.visit')} <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={raven.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary/80 transition-colors hover:text-primary"
              >
                <GithubIcon className="h-4 w-4" /> {t('raven.source')}
              </a>
            </div>
          </div>

          <div className="relative order-1 min-h-[240px] overflow-hidden bg-gradient-to-br from-[#3a2a4a] to-[#0d0d0d] lg:order-2 lg:min-h-full">
            <img src={raven.img} alt="Raven" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </motion.article>
      </div>
    </section>
  )
}
