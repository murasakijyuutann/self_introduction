import { projects } from '@/data/projects'
import { ProjectCaseStudyCard } from '@/components/ProjectCaseStudyCard'
import { Reveal } from '@/components/Reveal'

export default function Projects() {
  return (
    <div className="bg-bg">
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-16 md:py-24">
        <Reveal index={0}>
          <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-accent md:text-[13px]">
            Case Files No. 01–{String(projects.length).padStart(2, '0')} — Selected Work
          </p>
        </Reveal>

        <Reveal index={1}>
          <h1 className="mt-4 text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-fg md:text-[48px]">
            Projects
          </h1>
        </Reveal>

        <Reveal index={2}>
          <p className="mt-4 max-w-[640px] text-base leading-[1.65] text-muted">
            Each case file documents the problem going in, the role I actually played, and
            what shipped — ordered by how much forensic work they involved, not recency.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-10 md:mt-16 md:gap-12">
          {projects.map((project, i) => (
            <Reveal key={project.id} index={i}>
              <ProjectCaseStudyCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
