import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const links = [
  { href: '#work', key: 'work' },
  { href: '#about', key: 'about' },
  { href: '#experience', key: 'experience' },
  { href: '#contact', key: 'contact' },
] as const

export default function Nav() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/60 py-3 backdrop-blur-md' : 'py-6 md:py-8'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 sm:px-8">
        <a href="#top" className="text-sm font-bold tracking-tight text-primary">
          Fuad Alizada
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[rgba(225,224,204,0.7)] transition-colors hover:text-[#E1E0CC]"
              >
                {t(`nav.${l.key}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-black transition-transform hover:scale-105 sm:inline-block sm:text-sm"
          >
            {t('nav.getInTouch')}
          </a>
        </div>
      </div>
    </nav>
  )
}
