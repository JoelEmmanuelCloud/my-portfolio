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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-4">Articles</p>
            <h1 className="mb-4 text-4xl font-semibold tracking-tight text-ink dark:text-cream sm:mb-6 sm:text-6xl lg:text-7xl">
              Articles
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length > 0 ? (
            <RevealGroup className="space-y-6 sm:space-y-8" stagger={0.1}>
              {articles.map((article) => (
                <RevealItem
                  key={article.slug}
                  className="rounded-3xl border border-ink/10 bg-white p-6 transition-shadow duration-300 hover:shadow-xl dark:border-cream/10 dark:bg-ink/60 sm:p-8 lg:p-10"
                >
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {article.stack?.slice(0, 4).map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>

                  <h2 className="mb-2 text-2xl font-semibold text-ink dark:text-cream sm:text-3xl">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
