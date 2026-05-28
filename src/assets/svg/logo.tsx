import type { SVGAttributes } from 'react'

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none' {...props}>
      <rect width='32' height='32' rx='2' fill='var(--primary)' />
      {/* Top flange */}
      <rect x='6' y='7.5' width='20' height='4' fill='var(--primary-foreground)' />
      {/* Web */}
      <rect x='14' y='11.5' width='4' height='9' fill='var(--primary-foreground)' />
      {/* Bottom flange */}
      <rect x='6' y='20.5' width='20' height='4' fill='var(--primary-foreground)' />
    </svg>
  )
}

export default Logo
