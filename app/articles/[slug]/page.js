import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import { articles } from '@/data/articles'
import SlideButton from '@/components/ui/SlideButton'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import CTAPanel from '@/components/ui/CTAPanel'
import TechBadge from '@/components/ui/TechBadge'
import SectionHeading from '@/components/layout/SectionHeading'

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }) {
  const article = articles.find(a => a.slug === params.slug)
  if (!article) return {}

  return {
    title: `${article.title} — Joel Emmanuel`,
    description: article.summary,
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} — Joel Emmanuel`,
      description: article.summary,
      url: `https://joelemmanuel.dev/articles/${article.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} — Joel Emmanuel`,
      description: article.summary,
    },
  }
}

export default function ArticleDetail({ params }) {
  const article = articles.find(a => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = articles
    .filter(a => a.slug !== params.slug)
    .slice(0, 2)

  return (
    <div className="min-h-screen bg-cream dark:bg-ink">

      <section className="py-6 sm:py-8">
        <div className="container">
          <Link
            href="/articles"
            className="inline-flex items-center text-sm font-semibold text-ink/70 transition-colors hover:text-ink dark:text-cream/70 dark:hover:text-cream sm:text-base"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Link>
        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-12">
        <div className="container">
          <Reveal className="max-w-4xl">
            <p className="label mb-4">{article.date}</p>
            <h1 className="mb-6 text-4xl font-semibold leading-[1] text-ink dark:text-cream sm:mb-8 sm:text-6xl lg:text-7xl">
              {article.title}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-ink/70 dark:text-cream/70 sm:text-xl">
              {article.summary}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-10 sm:py-14 lg:py-16">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">

            <Reveal className="space-y-10 lg:col-span-2 lg:space-y-14">

              {article.context && (
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-ink dark:text-cream sm:text-2xl">
                    Context
                  </h2>
                  <p className="text-base leading-relaxed text-ink/70 dark:text-cream/70 sm:text-lg">
                    {article.context}
                  </p>
                </div>
              )}

              {article.approach && (
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-ink dark:text-cream sm:text-2xl">
                    Approach
                  </h2>
                  <p className="text-base leading-relaxed text-ink/70 dark:text-cream/70 sm:text-lg">
                    {article.approach}
                  </p>
                </div>
              )}

              {article.challenges && (
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-ink dark:text-cream sm:text-2xl">
                    What broke
                  </h2>
                  <p className="text-base leading-relaxed text-ink/70 dark:text-cream/70 sm:text-lg">
                    {article.challenges}
                  </p>
                </div>
              )}

              {article.lessons && (
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-ink dark:text-cream sm:text-2xl">
                    What I&apos;d do differently
                  </h2>
                  <p className="text-base leading-relaxed text-ink/70 dark:text-cream/70 sm:text-lg">
                    {article.lessons}
                  </p>
                </div>
              )}

              {article.papers && article.papers.length > 0 && (
                <div>
                  <h2 className="mb-6 text-xl font-semibold text-ink dark:text-cream sm:text-2xl">
                    Reading list
                  </h2>
                  <div className="space-y-4">
                    {article.papers.map((paper) => (
                      <a
                        key={paper.title}
                        href={paper.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="surface-card group flex items-start justify-between gap-3 rounded-lg p-5 transition-colors hover:bg-ink/5 dark:hover:bg-cream/[0.07]"
                      >
                        <div>
                          <p className="text-base font-medium text-ink dark:text-cream">{paper.title}</p>
                          <p className="mt-1 text-sm text-ink/50 dark:text-cream/50">
                            {paper.authors}{paper.year ? ` · ${paper.year}` : ''}
                          </p>
                        </div>
                        <ArrowUpRight className="size-4 shrink-0 text-ink/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold dark:text-cream/50" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

            </Reveal>

            <Reveal direction="left" delay={0.1} className="space-y-6 lg:sticky lg:top-24 lg:self-start">

              {article.stack && article.stack.length > 0 && (
                <div className="surface-card p-6 sm:p-8">
                  <h3 className="mb-5 text-base font-semibold text-ink dark:text-cream sm:text-lg">
                    Tools &amp; stack
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {article.stack.map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>
              )}

              {(article.links?.live || article.links?.github || article.links?.dataset) && (
                <div className="surface-card p-6 sm:p-8">
                  <h3 className="mb-5 text-base font-semibold text-ink dark:text-cream sm:text-lg">
                    Links
                  </h3>
                  <div className="space-y-3">
                    {article.links?.live && (
                      <a
                        href={article.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 text-sm font-medium text-ink/70 transition-colors hover:text-gold dark:text-cream/70 sm:text-base"
                      >
                        <ArrowUpRight className="size-4 shrink-0" />
                        Live site
                      </a>
                    )}

                    {article.links?.github && (
                      <a
                        href={article.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 text-sm font-medium text-ink/70 transition-colors hover:text-gold dark:text-cream/70 sm:text-base"
                      >
                        <ArrowUpRight className="size-4 shrink-0" />
                        Source code
                      </a>
                    )}

                    {article.links?.dataset && (
                      <a
                        href={article.links.dataset}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 text-sm font-medium text-ink/70 transition-colors hover:text-gold dark:text-cream/70 sm:text-base"
                      >
                        <ArrowUpRight className="size-4 shrink-0" />
                        Dataset
                      </a>
                    )}
                  </div>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="container">
            <Reveal>
              <SectionHeading
                title="More articles"
                className="mb-10 sm:mb-12"
              />
            </Reveal>

            <RevealGroup className="grid gap-6 sm:gap-8 md:grid-cols-2" stagger={0.12}>
              {relatedArticles.map((relatedArticle) => (
                <RevealItem key={relatedArticle.slug} className="surface-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                  <h3 className="mb-2 text-xl font-semibold text-ink dark:text-cream sm:text-2xl">
                    {relatedArticle.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-ink/70 dark:text-cream/70 sm:text-base">
                    {relatedArticle.summary}
                  </p>

                  <SlideButton href={`/articles/${relatedArticle.slug}`} variant="dark">
                    Read the article
                  </SlideButton>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container">
          <CTAPanel
            title="Interested in similar work?"
            description="Get in touch to talk through scope and fit."
            primary={{ href: '/contact', label: 'Start a conversation' }}
            secondary={{ href: '/articles', label: 'View all articles' }}
          />
        </div>
      </section>
    </div>
  )
}
