import Skeleton from '@/components/ui/Skeleton'

export default function PageSkeleton({ cards = 3 }) {
  return (
    <div role="status" aria-busy="true" aria-label="Loading page">
      <section className="pb-8 pt-12 sm:pb-10 sm:pt-16 lg:pt-20">
        <div className="container">
          <Skeleton className="mb-5 h-3 w-24" />
          <Skeleton className="mb-6 h-12 w-3/4 max-w-xl sm:h-20 lg:h-28" />
          <Skeleton className="mb-2 h-5 w-full max-w-2xl" />
          <Skeleton className="h-5 w-2/3 max-w-lg" />
        </div>
      </section>

      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="container space-y-6 sm:space-y-8">
          {Array.from({ length: cards }, (_, index) => (
            <div key={index} className="surface-card grid overflow-hidden lg:grid-cols-2">
              <Skeleton className="aspect-[4/3] rounded-none lg:aspect-auto lg:min-h-[320px]" />
              <div className="space-y-4 p-6 sm:p-8 lg:p-10">
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-24 rounded-full" />
                </div>
                <Skeleton className="h-8 w-4/5" />
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-10 w-36 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <span className="sr-only">Loading</span>
    </div>
  )
}
