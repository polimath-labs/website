import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="min-h-[100dvh] bg-(--color-surface) text-(--color-text-primary) flex flex-col justify-between px-6 md:px-16 lg:px-24">
      <div className="pt-12">
        <svg viewBox="0 0 100 100" className="h-7 w-7" fill="currentColor" aria-label="Polimath Labs">
            <polygon points="0,0 100,0 58,26 0,26"/>
            <polygon points="62,0 100,0 100,60 68,60 58,50 58,26"/>
            <polygon points="0,30 26,30 26,68 38,80 0,80"/>
            <polygon points="38,80 26,68 26,100 100,100 100,68 68,68"/>
          </svg>
      </div>

      <main className="max-w-[640px] py-16">
        <p className="text-lg md:text-xl leading-relaxed text-(--color-text-muted)">
          <span className="text-(--color-text-primary) font-medium">Polimath Labs</span> is
          a technology lab building useful tools and focused on developing deep technical
          competence.
        </p>

        <p className="mt-6 text-lg md:text-xl leading-relaxed text-(--color-text-muted)">
          We build on the web and study how things underneath it work.
          We care about software that works well, stays simple, and respects
          the people using it.
        </p>

        <p className="mt-6 text-lg md:text-xl leading-relaxed text-(--color-text-muted)">
          Right now we're building{' '}
          <a
            href="https://loanstack.polimath.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--color-text-primary) underline underline-offset-4 decoration-(--color-text-muted) hover:decoration-(--color-text-primary) transition-colors"
          >
            Loanstack
          </a>
          , a loan management platform for microfinance organizations. It
          handles the full lifecycle: client onboarding, disbursement, repayment tracking, and
          compliance.
        </p>
      </main>

      <footer className="pb-10 text-sm text-(--color-text-muted)">
        &copy; 2026 Polimath Labs
      </footer>
    </div>
  )
}
