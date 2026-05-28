'use client'

import { useEffect, useRef, useState } from 'react'

import { WrenchIcon, Building2Icon, PenToolIcon, CheckIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

const useInView = (threshold = 0.12) => {
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

const audiences = [
  {
    icon: WrenchIcon,
    title: 'Steel Fabricators',
    tagline: 'Workshop-ready details, every time',
    description:
      'We translate structural intent into precise, fabrication-ready documentation — eliminating ambiguity and reducing rework on the workshop floor.',
    deliverables: ['Shop drawings to AS 4100', 'Tekla & Revit models', 'Connection details & schedules', 'CNC / NC1 data output']
  },
  {
    icon: Building2Icon,
    title: 'EPC Contractors',
    tagline: 'Coordinated models, tighter programmes',
    description:
      'Fully coordinated 3D models with multi-discipline clash detection that keep complex, fast-track projects on schedule and within specification.',
    deliverables: ['Federated BIM models', 'Navisworks clash detection', 'IFC / NWC exports', 'Programme-aligned delivery']
  },
  {
    icon: PenToolIcon,
    title: 'Structural Consultants',
    tagline: 'Design intent, precisely realised',
    description:
      'We interpret and implement your structural design with accuracy — delivering detailed models and connection checks that hold up under independent review.',
    deliverables: ['3D coordination models', 'Connection design checks', 'Revision management', 'AS 4100 compliance']
  }
]

const PartnerSection = () => {
  const { ref, inView } = useInView()

  return (
    <section
      id='about'
      ref={ref}
      className='relative bg-muted/40 py-20 lg:py-28'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20'>

          {/* ── Left: intro copy ── */}
          <div
            className={cn(
              'lg:col-span-5 flex flex-col justify-center gap-6 transition-all duration-700',
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            )}
          >
            <span className='inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-sm font-medium text-primary'>
              Extended Engineering Partner
            </span>

            <h2 className='text-3xl font-bold leading-tight tracking-tight sm:text-4xl'>
              We work where your project{' '}
              <span className='text-primary'>needs us most.</span>
            </h2>

            <p className='text-muted-foreground text-lg leading-relaxed'>
              We operate as an integrated extension of your engineering team — providing specialist steel detailing and BIM expertise precisely when and where it's needed, without adding overhead to your organisation.
            </p>

            <p className='text-muted-foreground leading-relaxed'>
              Whether you're running a high-volume fabrication shop, managing a complex EPC programme, or delivering structural consulting work, we embed our capability directly into your workflow.
            </p>

            {/* Divider stat row */}
            <div
              className={cn(
                'grid grid-cols-2 gap-4 border-t border-border pt-6 transition-all duration-700 delay-300',
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              {[
                { value: '3 Disciplines', label: 'Fabrication · EPC · Consulting' },
                { value: 'AS 4100', label: 'Australian Standard compliance' }
              ].map(s => (
                <div key={s.label} className='flex flex-col gap-0.5'>
                  <span className='text-primary text-xl font-bold'>{s.value}</span>
                  <span className='text-muted-foreground text-xs'>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: timeline cards ── */}
          <div
            className={cn(
              'lg:col-span-7 transition-all duration-700 delay-150',
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            )}
          >
            <div className='relative flex flex-col gap-5'>

              {/* Animated vertical connecting line */}
              <div
                className='absolute left-5 top-10 w-px origin-top bg-gradient-to-b from-primary via-secondary/60 to-primary transition-[transform,opacity] duration-1000 delay-400'
                style={{
                  height: 'calc(100% - 3.5rem)',
                  transform: inView ? 'scaleY(1)' : 'scaleY(0)',
                  opacity: inView ? 1 : 0
                }}
              />

              {audiences.map(({ icon: Icon, title, tagline, description, deliverables }, index) => (
                <div
                  key={title}
                  className='flex gap-5 transition-all duration-500'
                  style={{
                    transitionDelay: `${350 + index * 150}ms`,
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  {/* Icon node sitting on the timeline */}
                  <div className='relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary shadow-md shadow-primary/25'>
                    <Icon className='text-primary-foreground size-4' />
                  </div>

                  {/* Flip card — perspective container */}
                  <div
                    className='group/card flex-1'
                    style={{ perspective: '1000px', minHeight: '168px' }}
                  >
                    {/* Flipper — rotates on hover */}
                    <div
                      className='relative h-full w-full transition-transform duration-700 ease-in-out group-hover/card:[transform:rotateY(180deg)]'
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* ── Front ── */}
                      <div
                        className='absolute inset-0 flex flex-col justify-center rounded-xl border border-primary/15 bg-[oklch(0.97_0.015_230)] dark:bg-card p-5 shadow-xs'
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <p className='text-secondary mb-1 text-xs font-semibold uppercase tracking-wider'>
                          {tagline}
                        </p>
                        <h3 className='text-foreground mb-2 text-lg font-semibold'>{title}</h3>
                        <p className='text-muted-foreground text-sm leading-relaxed'>{description}</p>
                      </div>

                      {/* ── Back ── */}
                      <div
                        className='absolute inset-0 flex flex-col justify-center gap-3 overflow-hidden rounded-xl bg-primary p-5'
                        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                      >
                        {/* Grid overlay */}
                        <div
                          className='pointer-events-none absolute inset-0 opacity-[0.07]'
                          style={{
                            backgroundImage:
                              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                            backgroundSize: '24px 24px'
                          }}
                        />
                        <p className='relative -translate-y-2 text-secondary text-xs font-semibold uppercase tracking-wider opacity-0 transition-all duration-300 group-hover/card:translate-y-0 group-hover/card:opacity-100'
                          style={{ transitionDelay: '680ms' }}
                        >
                          Key Deliverables
                        </p>
                        <ul className='relative grid grid-cols-1 gap-2.5'>
                          {deliverables.map((item, i) => (
                            <li
                              key={item}
                              className='-translate-x-4 flex items-center gap-2 text-sm text-primary-foreground/85 opacity-0 transition-all duration-300 group-hover/card:translate-x-0 group-hover/card:opacity-100'
                              style={{ transitionDelay: `${730 + i * 75}ms` }}
                            >
                              <CheckIcon className='text-secondary size-3.5 shrink-0' />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default PartnerSection
