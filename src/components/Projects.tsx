import { ExternalLink, Folder } from 'lucide-react'
import { projects } from '../data/content'
import { GithubIcon } from './BrandIcons'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <Reveal>
        <SectionHeading index="04" title="Projects" />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={0.1 * ((i % 2) + 1)}>
            <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50">
              <div className="mb-4 flex items-center justify-between">
                <Folder className="h-8 w-8 text-accent-500" />
                <div className="flex items-center gap-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} on GitHub`}
                      className="rounded-lg p-2 text-slate-500 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
                    >
                      <GithubIcon className="h-5 w-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} live site`}
                      className="rounded-lg p-2 text-slate-500 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">
                {project.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="font-mono text-xs text-slate-600 dark:text-slate-400"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
