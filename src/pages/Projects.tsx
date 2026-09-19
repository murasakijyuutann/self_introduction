import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getUniqueStackTags, projects } from '@/data/projects'
import { ProjectCaseStudyCard } from '@/components/ProjectCaseStudyCard'
import { Reveal } from '@/components/Reveal'

function stackChipClass(isSelected: boolean) {
  return isSelected
    ? 'border-accent text-accent'
    : 'border-rule text-muted hover:border-fg hover:text-fg'
}

export default function Projects() {
  const { t } = useTranslation()
  const [selectedTags, setSelectedTags] = useState<Set<string>>(() => new Set())

  const stackTags = useMemo(() => getUniqueStackTags(projects), [])

  const filteredProjects = useMemo(() => {
    if (selectedTags.size === 0) return projects
    return projects.filter((project) => project.stack.some((tag) => selectedTags.has(tag)))
  }, [selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev)
      if (next.has(tag)) next.delete(tag)
      else next.add(tag)
      return next
    })
  }

  const clearFilters = () => setSelectedTags(new Set())

  const hasActiveFilters = selectedTags.size > 0

  return (
    <div className="bg-bg">
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-16 md:py-24">
        <Reveal index={0}>
          <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-accent md:text-[13px]">
            {t('projects.eyebrow', { count: String(projects.length).padStart(2, '0') })}
          </p>
        </Reveal>

        <Reveal index={1}>
          <h1 className="mt-4 text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-fg md:text-[48px]">
            {t('projects.heading')}
          </h1>
        </Reveal>

        <Reveal index={2}>
          <p className="mt-4 max-w-[640px] text-base leading-[1.65] text-muted">
            {t('projects.intro')}
          </p>
        </Reveal>

        <Reveal index={3} className="mt-10 md:mt-12">
          <div className="border border-rule p-5 md:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.04em] text-accent">
                {t('projects.filterByTech')}
              </p>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="font-mono text-[11px] uppercase tracking-[0.04em] text-muted underline underline-offset-4 hover:text-fg"
                >
                  {t('projects.clearFilters')}
                </button>
              )}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {stackTags.map((tag) => {
                const isSelected = selectedTags.has(tag)
                return (
                  <button
                    key={tag}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => toggleTag(tag)}
                    className={`rounded-[4px] border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.02em] transition-colors ${stackChipClass(isSelected)}`}
                  >
                    {tag}
                  </button>
                )
              })}
            </div>
            {hasActiveFilters && (
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.02em] text-muted">
                {t('projects.showingCount', {
                  shown: filteredProjects.length,
                  total: projects.length,
                })}
              </p>
            )}
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col gap-10 md:mt-16 md:gap-12">
          {filteredProjects.length === 0 ? (
            <Reveal index={0}>
              <p className="font-mono text-[13px] uppercase tracking-[0.04em] text-muted">
                {t('projects.noMatches')}
              </p>
            </Reveal>
          ) : (
            filteredProjects.map((project, i) => (
              <Reveal key={project.id} index={i}>
                <ProjectCaseStudyCard project={project} />
              </Reveal>
            ))
          )}
        </div>
      </section>
    </div>
  )
}
