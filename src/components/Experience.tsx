import { MapPin } from 'lucide-react'
import { experience } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <Reveal>
        <SectionHeading index="03" title="Experience" />
      </Reveal>

      <ol className="relative space-y-10 border-l border-slate-200 pl-6 sm:pl-8 dark:border-slate-800">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${job.period}`} delay={0.1 * (i + 1)}>
            <li className="relative">
              {/* Timeline dot */}
              <span
                aria-hidden
                className="absolute top-1.5 -left-[1.85rem] h-3 w-3 rounded-full border-2 border-accent-500 bg-white sm:-left-[2.35rem] dark:bg-slate-950"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {job.role}{' '}
                  <span className="text-accent-600 dark:text-accent-400">
                    @ {job.company}
                  </span>
                </h3>
                <p className="font-mono text-xs text-slate-600 dark:text-slate-400">
                  {job.period}
                </p>
              </div>
              <p className="mt-1 flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400">
                <MapPin className="h-3 w-3" />
                {job.location}
              </p>
              <ul className="mt-3 space-y-2">
                {job.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
