import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { GithubIcon } from './icons'
import type { Project } from '../data'

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation()

  return (
    <article className="group flex h-[62vh] max-h-[460px] w-[80vw] max-w-[400px] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-white/[0.06] bg-[#141414]">
      <div className="relative aspect-[2/1] shrink-0 overflow-hidden bg-gradient-to-br from-[#2a2a2a] to-[#0d0d0d]">
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          draggable={false}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-medium text-primary">{project.title}</h3>
          <div className="flex items-center gap-2 pt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="text-gray-500 transition-colors hover:text-primary"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={project.title}
                className="text-gray-500 transition-colors hover:text-primary"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-gray-400">{t(`projects.${project.id}`)}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-gray-400"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
