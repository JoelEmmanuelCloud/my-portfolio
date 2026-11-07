import { FlaskConical } from 'lucide-react'
import { articles } from '@/data/articles'
import SlideButton from '@/components/ui/SlideButton'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import CTAPanel from '@/components/ui/CTAPanel'
import TechBadge from '@/components/ui/TechBadge'

export default function Articles() {
  return (
    <div className="min-h-screen bg-cream dark:bg-ink">

      <section className="pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20">
        <div className="container">
          <Reveal className="page-spotlight max-w-3xl">
            <p className="eyebrow mb-4">Articles</p>
            <h1 className="page-title">
              Articles<span className="text-glow text-gold">.</span>
            </h1>
            <p className="max-w-2xl text-lg text-ink/65 dark:text-cream/65 sm:text-xl">
              Engineering write-ups on what it actually takes to build and ship production
              systems — fintech, AI, and blockchain lessons from real projects, with the
              details a portfolio card leaves out.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="container">
          {articles.length > 0 ? (
            <RevealGroup className="space-y-6 sm:space-y-8" stagger={0.1}>
              {articles.map((article, index) => (
                <RevealItem
                  key={article.slug}
                  className={`rounded-3xl border bg-white p-6 transition-shadow duration-300 hover:shadow-xl dark:bg-ink/60 sm:p-8 lg:p-10 ${
                    index === 0
                      ? 'border-gold/60 shadow-[0_0_60px_-12px_rgba(242,194,0,0.45)] lg:p-14'
                      : 'border-ink/10 dark:border-cream/10'
                  }`}
                >
                  {index === 0 && (
                    <span className="mb-5 inline-flex w-fit items-center rounded-full bg-gold px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-ink">
                      Latest
                    </span>
                  )}
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {article.stack?.slice(0, 4).map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>

                  <h2 className={`mb-2 font-semibold tracking-tight text-ink dark:text-cream ${index === 0 ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-3xl'}`}>
                    {article.title}
                  </h2>
                  <p className="mb-3 text-sm font-medium text-ink/50 dark:text-cream/50 sm:text-base">
                    {article.date}
                  </p>
                  <p className="mb-6 text-sm leading-relaxed text-ink/70 dark:text-cream/70 sm:text-base">
                    {article.summary}
                  </p>

                  <SlideButton href={`/articles/${article.slug}`} variant="dark">
                    Read the article
                  </SlideButton>
                </RevealItem>
              ))}
            </RevealGroup>
          ) : (
            <Reveal className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-ink/15 bg-white/50 px-6 py-16 text-center dark:border-cream/15 dark:bg-ink/40 sm:py-20">
              <FlaskConical className="size-10 text-ink/30 dark:text-cream/30" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-ink dark:text-cream sm:text-2xl">
                First article in progress
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-ink/60 dark:text-cream/60 sm:text-base">
                Currently writing about building Nomba Shield, a KYC-gated fintech backend
                shipped solo in under a week. Check back soon, or get in touch in the meantime.
              </p>
            </Reveal>
          )}
        </div>
      </section>

      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="container">
          <CTAPanel
            eyebrow="Next steps"
            title="Curious about the details?"
            description="Get in touch, or explore shipped projects while this is in progress."
            primary={{ href: '/contact', label: 'Get in touch' }}
            secondary={{ href: '/projects', label: 'View projects' }}
          />
        </div>
      </section>
    </div>
  )
}
