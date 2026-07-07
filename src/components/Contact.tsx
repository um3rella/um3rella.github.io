import { Mail } from 'lucide-react'
import { profile, socialLinks } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <Reveal>
        <SectionHeading index="05" title="Contact" />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mx-auto max-w-xl text-center">
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Let's work together
          </h3>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            I'm currently open to new opportunities. Whether you have a role in
            mind, a question, or just want to say hi, my inbox is always open.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition hover:bg-accent-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
          >
            <Mail className="h-4 w-4" />
            Say Hello
          </a>

          <div className="mt-8 flex items-center justify-center gap-1">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
