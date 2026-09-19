import { useTranslation } from 'react-i18next'
import type { Project, ProjectStatusKind } from '@/data/projects'

const STATUS_DOT_CLASS: Record<ProjectStatusKind, string> = {
  archived: 'bg-muted',
  active: 'bg-accent',
  live: 'bg-accent',
}

const STATUS_TEXT_CLASS: Record<ProjectStatusKind, string> = {
  archived: 'text-muted',
  active: 'text-fg',
  live: 'text-fg',
}

const PRO_CELLS = ['problem', 'role', 'outcome'] as const

export function ProjectCaseStudyCard({ project }: { project: Project }) {
  const { t } = useTranslation()
  const base = `projects.items.${project.id}`

  const hasFigures = !!project.figures && project.figures.length > 0
  const hasLiveLink = !!project.links.live
  const hasSourceLink = !!project.links.source

  return (
    <article className="rounded-md border border-rule">
      {/* Header row: card index + status pill */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule px-5 py-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.04em] text-muted">
          {String(project.index).padStart(2, '0')} / {t('projectCard.selectedWork')}
        </span>
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.04em]">
          <span
            aria-hidden="true"
            className={`size-1.5 rounded-full ${STATUS_DOT_CLASS[project.status.kind]}`}
          />
          <span className={STATUS_TEXT_CLASS[project.status.kind]}>{t(`${base}.status`)}</span>
        </span>
      </div>

      {/* Title + description */}
      <div className="px-5 py-6">
        <h3 className="text-[24px] font-semibold leading-[1.2] tracking-[-0.01em] text-fg md:text-[30px]">
          {t(`${base}.title`)}
        </h3>
        <p className="mt-3 max-w-[680px] text-[15px] leading-[1.65] text-muted md:text-base">
          {t(`${base}.description`)}
        </p>
      </div>

      {/* Problem / Role / Outcome hairline grid */}
      <div className="grid grid-cols-1 gap-px border-y border-rule bg-rule md:grid-cols-3">
        {PRO_CELLS.map((key) => (
          <div key={key} className="bg-bg px-5 py-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.04em] text-accent">
              {t(`projectCard.${key}`)}
            </p>
            <p className="mt-2 text-[14px] leading-[1.5] text-fg">{t(`${base}.${key}`)}</p>
          </div>
        ))}
      </div>

      {/* Key figures (optional — only ever real, verifiable numbers) */}
      {hasFigures && (
        <div className="flex flex-wrap gap-x-10 gap-y-4 border-b border-rule px-5 py-6">
          {project.figures!.map((figure) => (
            <div key={figure.labelKey}>
              <p className="text-[28px] font-semibold leading-none text-fg">{figure.value}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.04em] text-muted">
                {t(`${base}.figures.${figure.labelKey}`)}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Footer row: tech stack + links */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.02em] text-muted">
          {project.stack.join(' · ')}
        </p>
        <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.04em]">
          {hasLiveLink && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4 hover:text-fg"
            >
              {t('projectCard.viewLive')}
            </a>
          )}
          {hasSourceLink && (
            <a
              href={project.links.source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4 hover:text-fg"
            >
              {hasLiveLink ? t('projectCard.source') : t('projectCard.readCaseFile')}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
