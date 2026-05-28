'use client'

import { useEffect, useRef, useState } from 'react'

import {
  FactoryIcon,
  Building2Icon,
  FlameIcon,
  TrophyIcon,
  PackageIcon,
  PaletteIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from 'lucide-react'

import Autoplay from 'embla-carousel-autoplay'

import { type CarouselApi, Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

const useInView = (threshold = 0.1) => {
  const ref = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return { ref, inView }
}

// TODO: Replace placeholder image paths with actual project photos
const industries = [
  {
    icon: FactoryIcon,
    title: 'Industrial Structures',
    image: '/images/industries_serve/industrial.webp',
    description:
      'Manufacturing plants, process facilities, and heavy industrial frameworks requiring precise structural coordination and multi-discipline clash resolution.'
  },
  {
    icon: Building2Icon,
    title: 'Commercial Buildings',
    image: '/images/industries_serve/commercial_buildings.webp',
    description:
      'Multi-storey office towers, retail complexes, and mixed-use developments demanding accurate, BIM-coordinated steelwork from concept through to fabrication.'
  },
  {
    icon: FlameIcon,
    title: 'Oil & Gas Facilities',
    image: '/images/industries_serve/oil_and_gas.webp',
    description:
      'Offshore platforms, refineries, and petrochemical plant structures with stringent code compliance and demanding geometric complexity.'
  },
  {
    icon: TrophyIcon,
    title: 'Stadiums',
    image: '/images/industries_serve/stadium.webp',
    description:
      'Large-span roof structures, grandstands, and cantilevered seating tiers where structural elegance and fabrication precision are equally critical.'
  },
  {
    icon: PackageIcon,
    title: 'Warehouses & Logistics',
    image: '/images/industries_serve/warehouse.webp',
    description:
      'Large-span portal frames and distribution hub structures optimised for fast-track fabrication, minimal site interfaces, and rapid erection programmes.'
  },
  {
    icon: PaletteIcon,
    title: 'Miscellaneous & Architectural Steel',
    image: '/images/industries_serve/miscellaneous_amfd_architectural_steel.webp',
    description:
      'Feature staircases, façade framing, canopies, and bespoke architectural metalwork where precision detailing and design intent are equally critical.'
  }
]

const IndustriesSection = () => {
  const { ref, inView } = useInView()
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }))

  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on('select', () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <section id='industries' ref={ref} className='bg-primary relative overflow-hidden py-20 lg:py-28'>
      {/* Structural grid overlay */}
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.04]'
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Section header */}
        <div
          className={cn(
            'mb-12 flex flex-col items-center gap-4 text-center transition-all duration-700',
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          )}
        >
          <span className='bg-secondary text-secondary-foreground shadow-secondary/30 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold shadow-md'>
            Industries We Serve
          </span>
          <h2 className='text-primary-foreground max-w-2xl text-3xl leading-tight font-bold tracking-tight sm:text-4xl'>
            Structural steel expertise across <span className='text-secondary'>every sector.</span>
          </h2>
          <p className='text-primary-foreground/70 max-w-xl text-lg leading-relaxed'>
            From heavy industrial to bespoke architectural work — our detailing capability spans the full breadth of the
            steel construction industry.
          </p>
        </div>

        {/* Carousel */}
        <div
          className={cn(
            'transition-all delay-300 duration-700',
            inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <Carousel setApi={setApi} plugins={[plugin.current]} opts={{ loop: true, align: 'start' }} className='w-full bg-transparent'>
            <CarouselContent className='-ml-4'>
              {industries.map(({ icon: Icon, title, image, description }, index) => (
                <CarouselItem key={title} className='basis-full pl-4 sm:basis-1/2 lg:basis-1/3'>
                  <div className='group border-primary/15 hover:border-secondary/50 h-full overflow-hidden rounded-2xl border bg-[oklch(0.97_0.015_230)] dark:bg-card shadow-[0_6px_24px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.38)]'>
                    {/* Image */}
                    <div className='relative aspect-[16/9] overflow-hidden'>
                      <img
                        src={image}
                        alt={title}
                        className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                        loading='lazy'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent' />
                    </div>

                    {/* Content */}
                    <div className='flex flex-col gap-3 p-6'>
                      {/* Icon with ping */}
                      <div className='relative w-fit'>
                        <span
                          className='bg-secondary/30 absolute inset-0 animate-ping rounded-md'
                          style={{ animationDuration: '2.4s', animationDelay: `${index * 400}ms` }}
                        />
                        <div className='bg-secondary/10 group-hover:bg-secondary relative flex items-center justify-center rounded-md p-2 transition-colors duration-200'>
                          <Icon className='text-secondary size-4 transition-colors duration-200 group-hover:text-white' />
                        </div>
                      </div>

                      <h3 className='text-foreground text-base leading-snug font-bold'>{title}</h3>
                      <p className='text-muted-foreground text-xs leading-relaxed'>{description}</p>
                    </div>

                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Navigation row */}
          <div className='mt-8 flex items-center justify-center gap-4'>
            {/* Prev button */}
            <button
              onClick={() => api?.scrollPrev()}
              className='hover:bg-secondary hover:border-secondary flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors'
            >
              <ChevronLeftIcon className='size-4' />
            </button>

            {/* Dot indicators */}
            <div className='flex items-center gap-2'>
              {industries.map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={cn(
                    'rounded-full transition-all duration-300',
                    current === i ? 'bg-secondary h-2 w-6' : 'h-2 w-2 bg-white/30 hover:bg-white/60'
                  )}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={() => api?.scrollNext()}
              className='hover:bg-secondary hover:border-secondary flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors'
            >
              <ChevronRightIcon className='size-4' />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
