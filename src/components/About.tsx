import { useTranslation } from 'react-i18next'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import ScrollRevealText from './ScrollRevealText'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="bg-black px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#101010] px-6 py-16 text-center sm:px-10 md:py-24">
        <p className="mb-8 text-[10px] uppercase tracking-[0.2em] text-primary sm:text-xs">
          {t('about.label')}
        </p>

        <WordsPullUpMultiStyle
          key={t('about.h1')}
          className="mx-auto max-w-4xl justify-center text-3xl leading-[0.98] text-primary sm:text-4xl sm:leading-[0.92] md:text-5xl lg:text-6xl"
          segments={[
            { text: t('about.h1'), className: 'font-normal' },
            { text: t('about.h2'), className: 'italic font-serif' },
            { text: t('about.h3'), className: 'font-normal' },
          ]}
        />

        <div className="mx-auto mt-10 max-w-3xl md:mt-14">
          <ScrollRevealText
            key={t('about.paragraph')}
            className="text-sm leading-relaxed sm:text-base"
            style={{ color: '#DEDBC8' }}
            text={t('about.paragraph')}
          />
        </div>
      </div>
    </section>
  )
}
