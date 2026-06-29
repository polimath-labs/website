import { createFileRoute } from '@tanstack/react-router'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.from('[data-animate]', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.12,
      })

      gsap.from('[data-animate-right]', {
        x: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
        delay: 0.4,
      })
    },
    { scope: containerRef },
  )

  return (
    <div
      ref={containerRef}
      className="min-h-[100dvh] bg-(--color-surface) text-(--color-text-primary) flex flex-col justify-between px-6 md:px-16 lg:px-24 overflow-x-hidden"
    >
      <div className="pt-12 flex items-center gap-3" data-animate>
        <img src="/logos/favicon/favicon.svg" alt="Polimath Labs" className="h-8 w-8" />
        <span className="text-lg font-medium tracking-tight">Polimath Labs</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-16 py-16 w-full">
        <main className="md:w-1/2">
          <p data-animate className="text-lg md:text-xl leading-relaxed text-(--color-text-muted)">
            <span className="text-(--color-text-primary) font-medium">Polimath Labs</span> is
            a technology company focused on building useful tools and developing deep technical
            competence.
          </p>

          <p data-animate className="mt-6 text-lg md:text-xl leading-relaxed text-(--color-text-muted)">
            We build on the web and study how things underneath it work.
            We care about software that works well, stays simple, and respects
            the people using it.
          </p>

          <p data-animate className="mt-6 text-lg md:text-xl leading-relaxed text-(--color-text-muted)">
            Right now we're building{' '}
            <a
              href="https://loanstack.polimath.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--color-text-primary) underline underline-offset-4 decoration-(--color-text-muted)/40 hover:decoration-(--color-text-primary) transition-colors duration-300"
            >
              Loanstack
            </a>
            , a loan management platform for microfinance organizations. It
            handles the full lifecycle: client onboarding, disbursement, repayment tracking, and
            compliance.
          </p>
        </main>

        <aside className="hidden md:flex flex-col gap-6 text-sm text-(--color-text-muted) ml-auto">
          <div data-animate-right>
            <p className="text-(--color-text-primary) font-medium mb-1">Based in</p>
            <p className="leading-relaxed">Kigali, Rwanda</p>
          </div>
          <div data-animate-right>
            <p className="text-(--color-text-primary) font-medium mb-1">Current</p>
            <a
              href="https://loanstack.polimath.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="leading-relaxed hover:text-(--color-text-primary) transition-colors duration-300"
            >
              Loanstack
            </a>
          </div>
          <div data-animate-right>
            <p className="text-(--color-text-primary) font-medium mb-1">Contact</p>
            <a
              href="mailto:hello@polimath.dev"
              className="leading-relaxed hover:text-(--color-text-primary) transition-colors duration-300"
            >
              hello@polimath.dev
            </a>
          </div>
        </aside>
      </div>

      <footer className="pb-10 text-sm text-(--color-text-muted)" data-animate>
        &copy; 2026 Polimath Labs
      </footer>
    </div>
  )
}
