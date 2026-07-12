import { Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import { GithubIcon, WhatsAppIcon } from './icons'
import { EMAIL, PHONE, PHONE_TEL, WHATSAPP, GITHUB } from '../data'

const pill =
  'inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:border-white/40 hover:bg-white/[0.04]'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="bg-black px-4 py-24 text-center sm:px-6 md:py-40">
      <div className="mx-auto max-w-4xl">
        <p className="mb-8 text-[10px] uppercase tracking-[0.2em] text-primary/60 sm:text-xs">
          {t('contact.label')}
        </p>

        <WordsPullUpMultiStyle
          key={t('contact.h1')}
          className="justify-center text-4xl font-normal leading-[0.95] text-primary sm:text-5xl md:text-6xl lg:text-7xl"
          segments={[
            { text: t('contact.h1'), className: 'font-normal' },
            { text: t('contact.h2'), className: 'italic font-serif' },
          ]}
        />

        <a
          href={`mailto:${EMAIL}`}
          className="mt-10 inline-block text-lg text-primary underline-offset-8 transition-all hover:underline sm:text-2xl md:text-3xl"
        >
          {EMAIL}
        </a>

        <div className="mt-4">
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 text-base text-primary/80 transition-colors hover:text-primary sm:text-lg"
          >
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href={GITHUB} target="_blank" rel="noreferrer" className={pill}>
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={`${WHATSAPP}?text=${encodeURIComponent(t('contact.whatsapp'))}`}
            target="_blank"
            rel="noreferrer"
            className={pill}
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>

      <footer className="mx-auto mt-24 max-w-7xl border-t border-white/10 pt-8 text-xs text-gray-500">
        {t('contact.footer', { year: new Date().getFullYear() })}
      </footer>
    </section>
  )
}
