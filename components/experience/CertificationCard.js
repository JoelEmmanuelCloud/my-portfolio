import { ExternalLink } from 'lucide-react'
import TechBadge from '@/components/ui/TechBadge'
import { RevealItem } from '@/components/ui/Reveal'

export default function CertificationCard({ certification }) {
  const { name, issuer, date, id, verifyUrl, description, services } = certification

  return (
    <RevealItem className="surface-card p-6 transition-shadow duration-300 hover:shadow-lg sm:p-8">
      <div className="mb-5 flex items-start justify-between">
        <div className="mr-4 flex-1">
          <h3 className="mb-2 text-base font-semibold leading-tight text-ink dark:text-cream sm:text-lg">{name}</h3>
          <p className="text-sm font-medium text-ink/60 dark:text-cream/60 sm:text-base">{issuer}</p>
        </div>
        {verifyUrl && (
          <a
            href={verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Verify ${name} certification`}
            className="shrink-0 text-ink/50 transition-colors hover:text-gold dark:text-cream/50"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        )}
      </div>

      <div className="mb-4 space-y-1 text-sm text-ink/60 dark:text-cream/60">
        <p className="font-medium">{date}</p>
        {id && <p className="break-all">ID: {id}</p>}
      </div>

      <p className="text-sm leading-relaxed text-ink/70 dark:text-cream/70 sm:text-base">{description}</p>

      {services?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {services.map((service) => (
            <TechBadge key={service} name={service} />
          ))}
        </div>
      )}
    </RevealItem>
  )
}
