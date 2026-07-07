export function SectionHeading({
  index,
  title,
}: {
  index: string
  title: string
}) {
  return (
    <h2 className="mb-10 flex items-center gap-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
      <span className="font-mono text-lg font-medium text-accent-600 sm:text-xl dark:text-accent-400">
        {index}.
      </span>
      {title}
      <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
    </h2>
  )
}
