import { useTranslation } from 'react-i18next'

const langs = ['en', 'az'] as const

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = i18n.resolvedLanguage

  return (
    <div className="flex items-center rounded-full border border-white/15 p-0.5 text-[11px] font-medium">
      {langs.map((lng) => {
        const active = current === lng
        return (
          <button
            key={lng}
            type="button"
            onClick={() => i18n.changeLanguage(lng)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
              active ? 'bg-primary text-black' : 'text-primary/60 hover:text-primary'
            }`}
          >
            {lng}
          </button>
        )
      })}
    </div>
  )
}
