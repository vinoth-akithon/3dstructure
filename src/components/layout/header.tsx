'use client'

import { useEffect, useState } from 'react'

import ThemeToggle from '@/components/layout/theme-toggle'
import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import MenuDropdown from '@/components/blocks/menu-dropdown'
import MenuNavigation from '@/components/blocks/menu-navigation'
import type { NavigationSection } from '@/components/blocks/menu-navigation'

import { cn } from '@/lib/utils'

// Inline active section hook
const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const intersectingSections = entries.filter(entry => entry.isIntersecting)

        if (intersectingSections.length === 0) {
          setActiveSection('')
        } else {
          const mostVisible = intersectingSections.reduce((prev, current) =>
            current.intersectionRatio > prev.intersectionRatio ? current : prev
          )

          setActiveSection(mostVisible.target.id)
        }
      },
      {
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
        rootMargin: '-100px 0px -50% 0px'
      }
    )

    sectionIds.forEach(id => {
      const element = document.getElementById(id)

      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [sectionIds])

  return activeSection
}

type HeaderProps = {
  navigationData: NavigationSection[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  // Extract section IDs from navigation data - only include valid sections
  const sectionIds = navigationData.map(item => item.href?.replace('#', '')).filter(Boolean) as string[]

  // Only use active section if it's actually in our navigation list
  const detectedActiveSection = useActiveSection(sectionIds)
  const activeSection = sectionIds.includes(detectedActiveSection) ? detectedActiveSection : ''

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        'border-border dark:bg-background fixed top-0 z-50 h-16 w-full border-b bg-white transition-all duration-500',
        'animate-in slide-in-from-top-4 fade-in fill-mode-both duration-500',
        isScrolled ? 'shadow-sm' : '',
        className
      )}
    >
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8'>
        {/* Logo */}
        <a
          href='/#home'
          className='animate-in slide-in-from-left-6 fade-in fill-mode-both flex shrink-0 items-center delay-100 duration-500'
        >
          <img
            src='/images/site-logo.jpeg'
            alt='3D Structures'
            className='h-10 w-auto object-contain dark:rounded-md dark:bg-white dark:p-1'
          />
        </a>

        {/* Navigation */}
        <MenuNavigation
          navigationData={navigationData}
          activeSection={activeSection}
          className='animate-in fade-in fill-mode-both delay-200 duration-700 **:data-[slot=navigation-menu-list]:gap-1 max-lg:hidden'
        />

        {/* Actions */}
        <div className='animate-in slide-in-from-right-6 fade-in fill-mode-both flex items-center delay-100 duration-500'>
          <ThemeToggle />
          <Button
            variant='secondary'
            className='group relative ml-4 w-fit overflow-hidden rounded-lg text-base has-[>svg]:px-6 max-sm:hidden'
            asChild
          >
            <a href='#contact'>
              <span
                className='pointer-events-none absolute inset-0 w-1/3 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.45)_50%,transparent_100%)]'
                style={{ animation: 'shimmer-sweep 3s ease-in-out infinite' }}
              />
              Partner With Us
            </a>
          </Button>

          {/* Mobile get a quote button */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant='secondary' className='ml-4 rounded-lg sm:hidden' asChild>
                  <a href='#contact'>Partner With Us</a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Partner With Us</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Mobile menu button */}
          <MenuDropdown
            align='end'
            navigationData={navigationData}
            activeSection={activeSection}
            trigger={
              <Button variant='outline' size='icon' className='ml-3 rounded-lg lg:hidden'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            }
          />
        </div>
      </div>
    </header>
  )
}

export default Header
