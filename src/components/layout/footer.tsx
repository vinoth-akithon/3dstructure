'use client'

import { LinkedinIcon, MailIcon, MapPinIcon, ArrowRightIcon } from 'lucide-react'

import { footerNav, footerServices, footerContact } from '@/assets/data/footer'

const Footer = () => {
  return (
    <footer className='bg-primary relative overflow-hidden'>
      {/* Structural grid overlay */}
      <div
        className='pointer-events-none absolute inset-0 opacity-[0.04]'
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className='relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20'>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12'>
          {/* ── Column 1: Brand + contact details ── */}
          <div className='flex flex-col gap-5 lg:col-span-1'>
            <a href='/#home' className='w-fit'>
              <img
                src={`${import.meta.env.BASE_URL}images/site-logo.jpeg`}
                alt='3D Structure'
                className='h-10 w-auto rounded-md bg-white object-contain p-1'
              />
            </a>

            <p className='text-primary-foreground/65 text-sm leading-relaxed'>
              Specialist structural steel detailing and 3D BIM modelling services, delivered to Australian standards —
              on time, every time.
            </p>

            {/* Contact details */}
            <div className='flex flex-col gap-3'>
              <a
                href={`mailto:${footerContact.email}`}
                className='text-primary-foreground/65 hover:text-secondary flex items-center gap-2.5 text-sm transition-colors'
              >
                <MailIcon className='text-secondary size-3.5 shrink-0' />
                {footerContact.email}
              </a>
              <div className='text-primary-foreground/65 flex items-start gap-2.5 text-sm'>
                <MapPinIcon className='text-secondary mt-0.5 size-3.5 shrink-0' />
                {footerContact.address}
              </div>
            </div>

            {/* LinkedIn only */}
            <a
              href='#'
              className='text-primary-foreground/70 hover:bg-secondary flex w-fit items-center justify-center rounded-lg bg-white/10 p-2 transition-colors hover:text-white'
            >
              <LinkedinIcon className='size-4' />
            </a>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div className='flex flex-col gap-5'>
            <h4 className='text-primary-foreground text-sm font-semibold tracking-widest uppercase'>Quick Links</h4>
            <ul className='flex flex-col gap-2.5'>
              {footerNav.map(item => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className='group text-primary-foreground/60 hover:text-secondary flex w-fit items-center gap-1.5 text-sm transition-colors'
                  >
                    {item.title}
                    <ArrowRightIcon className='text-secondary size-3 translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100' />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Services ── */}
          <div className='flex flex-col gap-5'>
            <h4 className='text-primary-foreground text-sm font-semibold tracking-widest uppercase'>Our Services</h4>
            <ul className='flex flex-col gap-2.5'>
              {footerServices.map(item => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className='group text-primary-foreground/60 hover:text-secondary flex w-fit items-center gap-1.5 text-sm transition-colors'
                  >
                    {item.title}
                    <ArrowRightIcon className='text-secondary size-3 translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100' />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Get Started ── */}
          <div className='flex flex-col gap-5'>
            <h4 className='text-primary-foreground text-sm font-semibold tracking-widest uppercase'>Get Started</h4>

            <ul className='flex flex-col gap-2.5'>
              <li>
                <a
                  href='#contact'
                  className='group text-primary-foreground/60 hover:text-secondary flex w-fit items-center gap-1.5 text-sm transition-colors'
                >
                  Contact Us
                  <ArrowRightIcon className='text-secondary size-3 translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100' />
                </a>
              </li>
              <li>
                <a
                  href='#projects'
                  className='group text-primary-foreground/60 hover:text-secondary flex w-fit items-center gap-1.5 text-sm transition-colors'
                >
                  View Our Projects
                  <ArrowRightIcon className='text-secondary size-3 translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className='relative border-t border-white/10'>
        <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 lg:px-8'>
          <p className='text-primary-foreground/50 text-xs'>
            © {new Date().getFullYear()} 3D Structure. All rights reserved.
          </p>
          <div className='flex items-center gap-5'>
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <a
                key={item}
                href='#'
                className='text-primary-foreground/40 hover:text-primary-foreground/70 text-xs transition-colors'
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
