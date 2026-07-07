import { Globe, Mail } from 'lucide-react'
import type { SocialLink } from '../data/content'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

const icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  globe: Globe,
} as const

export function SocialIcon({
  link,
  className,
}: {
  link: SocialLink
  className?: string
}) {
  const Icon = icons[link.icon]
  return (
    <a
      href={link.url}
      target={link.url.startsWith('mailto:') ? undefined : '_blank'}
      rel="noreferrer"
      aria-label={link.label}
      className={
        className ??
        'rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-accent-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-accent-400'
      }
    >
      <Icon className="h-5 w-5" />
    </a>
  )
}
