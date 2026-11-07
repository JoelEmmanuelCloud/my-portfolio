import Skeleton from '@/components/ui/Skeleton'

export default function DetailSkeleton() {
  return (
    <div role="status" aria-busy="true" aria-label="Loading page">
      <section className="py-6 sm:py-8">
        <div className="container">
          <Skeleton className="h-4 w-32" />
        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-12">
        <div className="container max-w-4xl">
          <Skeleton className="mb-5 h-3 w-24" />
          <Skeleton className="mb-3 h-10 w-full sm:h-14 lg:h-16" />
          <Skeleton className="mb-8 h-10 w-2/3 sm:h-14 lg:h-16" />
          <Skeleton className="mb-2 h-5 w-full" />
          <Skeleton className="h-5 w-4/5" />
        </div>
      </section>

      <section className="pb-8 sm:pb-12">
        <div className="container">
          <Skeleton className="aspect-video w-full rounded-xl" />
        </div>
      </section>

      <section className="py-10 sm:py-14 lg:py-16">
        <div className="container grid gap-10 lg:grid-cols-3 lg:gap-14">
          <div className="space-y-10 lg:col-span-2">
            {Array.from({ length: 3 }, (_, index) => (
              <div key={index} className="space-y-3">
                <Skeleton className="mb-4 h-7 w-40" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
          <div className="surface-card space-y-4 self-start p-6 sm:p-8">
            <Skeleton className="h-5 w-32" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 6 }, (_, index) => (
                <Skeleton key={index} className="h-7 w-20 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </section>
      <span className="sr-only">Loading</span>
    </div>
  )
}
