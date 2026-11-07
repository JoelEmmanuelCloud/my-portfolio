import { FlaskConical } from 'lucide-react'
import { articles } from '@/data/articles'
import Reveal, { RevealGroup } from '@/components/ui/Reveal'
import CTAPanel from '@/components/ui/CTAPanel'
import ArticleCard from '@/components/article/ArticleCard'
import PageHeader from '@/components/layout/PageHeader'

export default function Articles() {
  return (
    <div className="min-h-screen bg-cream dark:bg-ink">

      <section className="pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20">
        <div className="container">
          <PageHeader
            title="Articles"
            description="Notes on building fintech, AI, and blockchain systems."
          />
        </div>
      </section>

      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="container">
          {articles.length > 0 ? (
            <RevealGroup className="space-y-6 sm:space-y-8" stagger={0.1}>
              {articles.map((article, index) => (
                <ArticleCard key={article.slug} article={article} latest={index === 0} />
              ))}
            </RevealGroup>
          ) : (
            <Reveal className="flex flex-col items-center gap-4 rounded-xl bg-white/50 px-6 py-16 text-center dark:bg-ink/40 sm:py-20">
              <FlaskConical className="size-10 text-ink/50 dark:text-cream/50" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-ink dark:text-cream sm:text-2xl">
                First article in progress
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-ink/70 dark:text-cream/70 sm:text-base">
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
