import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import WordsPullUp from './WordsPullUp'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="h-screen w-full bg-black p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/me-working.mp4" type="video/mp4" />
        </video>

        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/75" />

        <div className="absolute inset-x-0 bottom-0 px-5 pb-6 md:px-10 md:pb-10">
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 lg:col-span-8">
              <motion.p
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.7, ease: EASE }}
                className="mb-3 text-[11px] uppercase tracking-[0.2em] text-primary/70 sm:text-xs md:text-sm"
              >
                {t('hero.eyebrow')}
              </motion.p>
              <WordsPullUp
                text="Fuad Alizada"
                showAsterisk
                delayOffset={0.15}
                className="block font-medium leading-[0.82] tracking-[-0.04em] text-[16vw] sm:text-[14vw] md:text-[13vw] lg:text-[11.5vw] xl:text-[10.5vw]"
                style={{ color: '#E1E0CC' }}
              />
            </div>

            <div className="col-span-12 flex flex-col gap-6 pb-2 lg:col-span-4 lg:pb-6">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.8, ease: EASE }}
                className="text-sm text-primary/80 sm:text-base"
                style={{ lineHeight: 1.5 }}
              >
                {t('hero.desc')}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8, ease: EASE }}
                className="flex flex-wrap gap-3"
              >
                <a
                  href="#work"
                  className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary py-1 pl-5 pr-1 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
                >
                  {t('hero.viewWork')}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                    <ArrowRight className="h-4 w-4" style={{ color: '#E1E0CC' }} />
                  </span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:border-white/50 sm:text-base"
                >
                  {t('nav.getInTouch')}
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
