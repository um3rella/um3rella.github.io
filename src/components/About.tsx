import { profile } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <Reveal>
        <SectionHeading index="01" title="About" />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <Reveal delay={0.1}>
          <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <dl className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
            {profile.quickFacts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs font-semibold tracking-wide text-slate-400 uppercase dark:text-slate-500">
                  {fact.label}
                </dt>
                <dd className="mt-0.5 text-sm font-medium text-slate-800 dark:text-slate-200">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
