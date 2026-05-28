'use client'

import { useRef } from 'react'

import { ArrowRightIcon, UsersIcon, MonitorCheckIcon, ShieldCheckIcon, NetworkIcon, LockIcon, TimerIcon } from 'lucide-react'

import Autoplay from 'embla-carousel-autoplay'

import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

export type HeroSlide = {
  id: number
  img: string
  imgAlt: string
  clientQuote: string
  clientName: string
}

const HeroSection = ({ heroSlides }: { heroSlides: HeroSlide[] }) => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }))

  return (
    <section
      id='home'
      className='relative overflow-hidden pb-12 pt-24 sm:pb-16 lg:pb-24 lg:pt-28'
    >
      {/* Dot-grid: blueprint / engineering drawing feel */}
      <div
        className='pointer-events-none absolute inset-0 -z-10'
        style={{
          backgroundImage: 'radial-gradient(circle, oklch(0.40 0.14 235 / 0.07) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px'
        }}
      />
      <div className='from-background pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background' />
      <div className='from-background pointer-events-none absolute inset-y-0 left-0 -z-10 w-24 bg-gradient-to-r to-transparent' />
      <div className='from-background pointer-events-none absolute inset-y-0 right-0 -z-10 w-24 bg-gradient-to-l to-transparent' />

      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-8 gap-y-12 md:gap-y-16 lg:grid-cols-5'>

          {/* ── Copy block ── */}
          <div className='flex w-full flex-col justify-center gap-6 max-lg:items-center lg:col-span-3'>

            {/* Badge */}
            <div className='animate-in slide-in-from-bottom-4 fade-in fill-mode-both delay-100 duration-500'>
              <span className='inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-sm font-medium text-primary'>
                <span className='size-2 animate-pulse rounded-full bg-primary' />
                Steel Detailing Specialists — Serving Australia
              </span>
            </div>

            <h1 className='animate-in slide-in-from-bottom-4 fade-in fill-mode-both delay-150 duration-500 text-3xl font-bold leading-[1.18] tracking-tight text-balance max-lg:text-center sm:text-4xl lg:text-5xl'>
              Precise Steel Details.{' '}
              <span className='text-primary'>Faster Turnaround.</span>{' '}
              Zero Rework.
            </h1>

            <p className='animate-in slide-in-from-bottom-4 fade-in fill-mode-both delay-200 duration-500 text-muted-foreground max-w-xl text-lg leading-relaxed max-lg:text-center'>
              Fully coordinated structural steel detailing and 3D BIM modelling that bridges
              structural design with the fabrication floor. Delivered to Australian standards,
              on your programme, every time.
            </p>

            <div className='animate-in slide-in-from-bottom-4 fade-in fill-mode-both delay-300 duration-500 flex flex-wrap items-center gap-3'>
              <Button
                asChild
                size='lg'
                variant='secondary'
                className='group relative overflow-hidden rounded-lg text-base'
              >
                <a href='#contact'>
                  {/* Auto-running shimmer sweep */}
                  <span
                    className='pointer-events-none absolute inset-0 w-1/3 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.45)_50%,transparent_100%)]'
                    style={{ animation: 'shimmer-sweep 3s ease-in-out infinite' }}
                  />
                  Start a Project
                  <ArrowRightIcon
                    className='transition-transform duration-200 group-hover:translate-x-0.5'
                    style={{ animation: 'arrow-nudge 1.8s ease-in-out infinite' }}
                  />
                </a>
              </Button>
              <Button asChild size='lg' variant='outline' className='rounded-lg text-base'>
                <a href='#projects'>Explore Our Work</a>
              </Button>
            </div>

            {/* Key highlights — V1 (solid icon chips) */}
            {/* <div className='animate-in fade-in fill-mode-both delay-500 duration-700 w-full border-t border-border pt-5'>
              <div className='grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-3'>
                {[
                  { icon: UsersIcon,        label: '40+ Structural Engineers' },
                  { icon: MonitorCheckIcon, label: 'Robust Tekla Structures Capacity' },
                  { icon: ShieldCheckIcon,  label: 'Multi-Level Quality Assurance' },
                  { icon: NetworkIcon,      label: 'Scalable Project Teams' },
                  { icon: LockIcon,         label: 'Secure Digital Collaboration' },
                  { icon: TimerIcon,        label: '24-Hour Operational Infrastructure' }
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className='flex items-center gap-2.5'>
                    <span className='bg-primary shadow-primary/25 flex shrink-0 items-center justify-center rounded-md p-1.5 shadow-sm'>
                      <Icon className='text-primary-foreground size-3.5' />
                    </span>
                    <span className='text-foreground/80 text-xs font-medium leading-tight'>{label}</span>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Key highlights — V2 (gradient-accent cards — commented, kept for reference) */}
            {/* <div className='w-full border-t border-border pt-5'>
              <div className='grid grid-cols-2 gap-2.5 sm:grid-cols-3'>
                {highlights.map(({ icon: Icon, label }, index) => (
                  <div key={label} className='animate-in slide-in-from-bottom-4 fade-in fill-mode-both group relative overflow-hidden rounded-xl border border-border/60 bg-[oklch(0.97_0.015_230)] dark:bg-card px-3.5 py-3 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md hover:shadow-primary/8' style={{ animationDelay: `${480 + index * 80}ms` }}>
                    <div className='animate-in slide-in-from-left-full fill-mode-both from-primary via-primary/50 to-secondary absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r duration-500' style={{ animationDelay: `${600 + index * 80}ms` }} />
                    <Icon className='text-primary mb-2 size-4 transition-transform duration-200 group-hover:scale-110' />
                    <p className='text-foreground/75 text-xs font-medium leading-snug'>{label}</p>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Key highlights — V3 (accent-line list) */}
            <div className='w-full border-t border-border pt-5'>
              <div className='grid grid-cols-2 gap-x-6 gap-y-2.5'>
                {[
                  { icon: UsersIcon,        label: '40+ Structural Engineers' },
                  { icon: MonitorCheckIcon, label: 'Robust Tekla Structures Capacity' },
                  { icon: ShieldCheckIcon,  label: 'Multi-Level Quality Assurance' },
                  { icon: NetworkIcon,      label: 'Scalable Project Teams' },
                  { icon: LockIcon,         label: 'Secure Digital Collaboration' },
                  { icon: TimerIcon,        label: '24-Hour Operational Infrastructure' }
                ].map(({ icon: Icon, label }, index) => (
                  <div
                    key={label}
                    className='animate-in slide-in-from-left-4 fade-in fill-mode-both group flex items-center gap-2.5'
                    style={{ animationDelay: `${480 + index * 70}ms`, animationDuration: '450ms' }}
                  >
                    {/* Vertical accent — grows in after row slides in */}
                    <span
                      className='animate-in slide-in-from-top-2 fill-mode-both from-secondary to-primary h-5 w-[2.5px] shrink-0 rounded-full bg-gradient-to-b'
                      style={{ animationDelay: `${560 + index * 70}ms`, animationDuration: '300ms' }}
                    />
                    {/* Icon: entrance pop + continuous ping ring behind it */}
                    <span className='relative flex size-3.5 shrink-0 items-center justify-center'>
                      <span
                        className='animate-ping absolute inline-flex size-full rounded-full bg-secondary/30'
                        style={{ animationDuration: '2.2s', animationDelay: `${index * 360}ms` }}
                      />
                      <Icon
                        className='animate-in zoom-in-50 fade-in fill-mode-both relative text-secondary size-3.5 transition-transform duration-200 group-hover:scale-110'
                        style={{ animationDelay: `${640 + index * 70}ms`, animationDuration: '300ms' }}
                      />
                    </span>
                    <span className='text-foreground/75 text-xs font-medium leading-tight transition-colors duration-200 group-hover:text-foreground'>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Main image carousel ── */}
          <Carousel
            className='animate-in slide-in-from-right-8 fade-in fill-mode-both delay-200 duration-700 w-full lg:col-span-2'
            plugins={[plugin.current]}
            opts={{ loop: true }}
          >
            <CarouselContent>
              {heroSlides.map(slide => (
                <CarouselItem key={slide.id} className='flex w-full items-center justify-center'>
                  <div className='relative w-full overflow-hidden rounded-2xl'>
                    <img
                      src={slide.img}
                      alt={slide.imgAlt}
                      className='aspect-[4/3] w-full object-cover'
                      loading='lazy'
                    />
                    {/* Project category label */}
                    <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-10'>
                      <p className='text-sm font-medium text-white/90'>{slide.imgAlt}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
