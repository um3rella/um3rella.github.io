import { ArrowUp } from 'lucide-react'
import { profile } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-6 sm:px-6">
        <p className="text-xs text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} {profile.name}. Built with React &
          Tailwind CSS.
        </p>
        <a
          href="#top"
          aria-label="Back to top"
          className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-xs font-medium text-slate-600 transition-colors hover:text-accent-600 dark:text-slate-400 dark:hover:text-accent-400"
        >
          <ArrowUp className="h-3.5 w-3.5" />
          Top
        </a>
      </div>
    </footer>
  )
}
