'use client'

import { useEffect, useRef, useState } from 'react'

import {
  ClockIcon,
  RocketIcon,
  RadioIcon,
  UsersRoundIcon,
  TrendingDownIcon,
  ShieldCheckIcon,
  ScaleIcon,
  WrenchIcon
} from 'lucide-react'

import { cn } from '@/lib/utils'

const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return { ref, inView }
}

const advantages = [
  {
    icon: ClockIcon,
    title: '24-Hour Project Continuity',
    description:
      'Extended operating hours keep critical-path items progressing around the clock, maintaining momentum across time zones.'
  },
  {
    icon: RocketIcon,
    title: 'Accelerated Turnaround',
    description:
      'Dedicated project teams and streamlined review cycles cut drawing turnaround times without compromising accuracy.'
  },
  {
    icon: RadioIcon,
    title: 'Structured Communication',
    description:
      'Defined RFI protocols, weekly status reports, and single points of contact keep you informed at every stage.'
  },
  {
    icon: UsersRoundIcon,
    title: 'Scalable Manpower',
    description:
      'Scale resource allocation up or down in response to project peaks without adding permanent overhead to your team.'
  },
  {
    icon: TrendingDownIcon,
    title: 'Cost-Efficient Execution',
    description:
      'Offshore delivery expertise paired with Australian-standard quality delivers significant cost advantage on every engagement.'
  }
]

const pillars = [
  {
    icon: ShieldCheckIcon,
    title: 'Transparency',
    description: 'Clear reporting and open communication — no surprises at any stage of the project.'
  },
  {
    icon: ScaleIcon,
    title: 'Accountability',
    description: 'We own our deliverables end-to-end and stand behind the quality of every drawing we issue.'
  },
  {
    icon: WrenchIcon,
    title: 'Technical Reliability',
    description: 'Consistent quality backed by multi-level QA and a team of experienced structural engineers.'
  }
]

const StrategicSection = () => {
  const { ref, inView } = useInView()

  return (
    <section
      id='services'
      ref={ref}
      className='relative bg-muted/40 py-20 lg:py-28'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

        {/* ── Section header ── */}
        <div
          className={cn(
            'mb-14 flex flex-col items-center gap-4 text-center transition-all duration-700',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          <span className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-sm font-medium text-primary'>
            Strategic Advantage
          </span>
          <h2 className='max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl'>
            An operating model built around{' '}
            <span className='text-primary'>your programme.</span>
          </h2>
          <p className='max-w-2xl text-lg leading-relaxed text-muted-foreground'>
            Our structure gives you access to specialist capacity precisely when you need it — without the overhead of full-time headcount or the uncertainty of project delays.
          </p>
        </div>

        {/* ── 5 advantage cards ── */}
        <div className='mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5'>
          {advantages.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className='group flex flex-col gap-4 rounded-2xl border border-primary/15 bg-[oklch(0.97_0.015_230)] dark:bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg hover:shadow-primary/8'
              style={{
                transitionDelay: `${200 + index * 80}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 500ms ease ${200 + index * 80}ms, transform 500ms ease ${200 + index * 80}ms, box-shadow 300ms, border-color 300ms`
              }}
            >
              {/* Icon with ping */}
              <div className='relative w-fit'>
                <span
                  className='absolute inset-0 animate-ping rounded-lg bg-secondary/25'
                  style={{ animationDuration: '2.5s', animationDelay: `${index * 450}ms` }}
                />
                <div className='relative flex items-center justify-center rounded-lg bg-secondary/10 p-3 transition-colors duration-200 group-hover:bg-secondary'>
                  <Icon className='size-5 text-secondary transition-colors duration-200 group-hover:text-white' />
                </div>
              </div>

              <h3 className='text-base font-semibold leading-snug text-foreground'>
                {title}
              </h3>
              <p className='text-xs leading-relaxed text-muted-foreground'>
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Partnership panel ── */}
        <div
          className={cn(
            'overflow-hidden rounded-3xl bg-primary px-8 py-10 transition-all duration-700 delay-700',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Structural grid overlay */}
          <div
            className='pointer-events-none absolute inset-0 opacity-[0.04]'
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />

          <div className='relative'>
            <p className='mb-2 text-center text-sm font-semibold uppercase tracking-widest text-primary-foreground/50'>
              Built for the long term
            </p>
            <p className='mx-auto mb-10 max-w-2xl text-center text-lg font-medium leading-relaxed text-primary-foreground/80'>
              We focus on long-term partnerships built on transparency, accountability, and technical reliability.
            </p>

            <div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
              {pillars.map(({ icon: Icon, title, description }, index) => (
                <div
                  key={title}
                  className='flex flex-col items-center gap-3 text-center'
                  style={{
                    transitionDelay: `${800 + index * 100}ms`,
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(16px)',
                    transition: `opacity 500ms ease ${800 + index * 100}ms, transform 500ms ease ${800 + index * 100}ms`
                  }}
                >
                  <div className='flex items-center justify-center rounded-xl bg-white/10 p-3'>
                    <Icon className='size-5 text-secondary' />
                  </div>
                  <h4 className='text-base font-semibold text-primary-foreground'>{title}</h4>
                  <p className='text-sm leading-relaxed text-primary-foreground/60'>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default StrategicSection
