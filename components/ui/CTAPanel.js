import SlideButton from './SlideButton'
import Reveal from './Reveal'

export default function CTAPanel({
  title,
  description,
  primary,
  secondary,
}) {
  return (
    <Reveal className="relative overflow-hidden rounded-3xl bg-cream px-6 py-14 text-center shadow-xl sm:px-10 sm:py-16 lg:py-20">
      <div className="glow-orb -top-20 left-1/2 h-64 w-64 -translate-x-1/2 bg-gold/25" />
      <div className="relative">
        <h2 className="mx-auto mb-5 max-w-3xl text-4xl font-semibold leading-[1] text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mb-8 max-w-xl text-base text-ink/60 sm:mb-10 sm:text-lg">
            {description}
          </p>
        )}
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          {primary && (
            <SlideButton href={primary.href} onClick={primary.onClick} variant="on-light">
              {primary.label}
            </SlideButton>
          )}
          {secondary && (
            <SlideButton href={secondary.href} onClick={secondary.onClick} variant="outline-on-light">
              {secondary.label}
            </SlideButton>
          )}
        </div>
      </div>
    </Reveal>
  )
}
