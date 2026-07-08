import type { CSSProperties } from 'react'
import { ArrowDown, FileDown } from 'lucide-react'
import { profile, socialLinks } from '../data/content'
import { SocialIcon } from './SocialIcon'

const fadeDelay = (delay: number): CSSProperties =>
  ({ '--fade-delay': `${Math.round(delay * 1000)}ms` }) as CSSProperties

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent-500/10 blur-3xl dark:bg-accent-500/15"
      />

      <div className="mx-auto w-full max-w-5xl px-4 py-24 sm:px-6">
        <p
          style={fadeDelay(0)}
          className="fade-up mb-4 font-mono text-sm text-accent-600 sm:text-base dark:text-accent-400"
        >
          Hi, my name is
        </p>

        <h1
          style={fadeDelay(0.1)}
          className="fade-up text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
        >
          {profile.name}.
        </h1>

        <h2
          style={fadeDelay(0.2)}
          className="fade-up mt-2 text-2xl font-semibold tracking-tight text-slate-500 sm:text-4xl lg:text-5xl dark:text-slate-400"
        >
          {profile.title}
        </h2>

        <p
          style={fadeDelay(0.3)}
          className="fade-up mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400"
        >
          {profile.tagline}
        </p>

        <div
          style={fadeDelay(0.4)}
          className="fade-up mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition hover:bg-accent-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
          >
            View Projects
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-accent-500 hover:text-accent-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-accent-400 dark:hover:text-accent-400"
          >
            <FileDown className="h-4 w-4" />
            Download Resume
          </a>
        </div>

        <div
          style={fadeDelay(0.5)}
          className="fade-up mt-8 flex items-center gap-1"
        >
          {socialLinks.map((link) => (
            <SocialIcon key={link.label} link={link} />
          ))}
        </div>
      </div>
    </section>
  )
}
