// Site Configuration
// Centralized configuration for site metadata, SEO, and branding

export const SITE_TITLE = '3D Structures | Steel Detailing Services Australia'
export const SITE_DESCRIPTION =
  'Professional steel detailing services across Australia. 3D Structures delivers precise shop drawings, BIM modelling, and connection design for structural engineers, builders, and fabricators.'

export const GITHUB_URL = ''
export const SITE_URL = 'https://3dstructures.com.au/'

export const SITE_METADATA = {
  title: {
    default: '3D Structures | Steel Detailing Services Australia'
  },
  description:
    'Professional steel detailing services across Australia. 3D Structures delivers precise shop drawings, BIM modelling, and connection design for structural engineers, builders, and fabricators.',
  keywords: [
    'steel detailing',
    'steel detailing Australia',
    '3D structural modelling',
    'shop drawings',
    'BIM modelling',
    'connection design',
    'structural steel',
    'fabrication drawings',
    'steel fabricator',
    'structural engineering Australia'
  ],
  authors: [{ name: '3D Structures', url: SITE_URL }],
  creator: '3D Structures',
  publisher: '3D Structures',
  robots: {
    index: true,
    follow: true
  },
  language: 'en-US',
  locale: 'en_US',
  icons: {
    icon: [
      { url: `${import.meta.env.BASE_URL}favicon/favicon.ico`, sizes: '48x48' },
      { url: `${import.meta.env.BASE_URL}favicon/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
      { url: `${import.meta.env.BASE_URL}favicon/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
      { url: `${import.meta.env.BASE_URL}favicon/android-chrome-192x192.png`, sizes: '192x192', type: 'image/png' },
      { url: `${import.meta.env.BASE_URL}favicon/android-chrome-512x512.png`, sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }]
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: '3D Structures',
    title: '3D Structures | Steel Detailing Services Australia',
    description:
      'Professional steel detailing services across Australia. 3D Structures delivers precise shop drawings, BIM modelling, and connection design for structural engineers, builders, and fabricators.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: '3D Structures — Steel Detailing Services Australia',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@3dstructures',
    creator: '@3dstructures',
    title: '3D Structures | Steel Detailing Services Australia',
    description:
      'Professional steel detailing services across Australia. 3D Structures delivers precise shop drawings, BIM modelling, and connection design for structural engineers, builders, and fabricators.',
    images: ['/images/og-image.png']
  },
  verification: {
    google: '', // Add your Google verification code
    yandex: '', // Add your Yandex verification code
    bing: '' // Add your Bing verification code
  }
}

// Social media links
export const SOCIAL_LINKS = {
  github: GITHUB_URL,
  twitter: 'https://twitter.com/shadcnstudio',
  linkedin: 'https://linkedin.com/company/shadcnstudio',
  discord: 'https://discord.gg/shadcnstudio'
}

// Company information for structured data
export const COMPANY_INFO = {
  name: '3D Structures',
  legalName: '3D Structure',
  url: SITE_URL,
  logo: `${import.meta.env.BASE_URL}images/site-logo.png`,
  foundingDate: '2010',
  address: {
    streetAddress: '',
    addressLocality: '',
    addressRegion: '',
    postalCode: '',
    addressCountry: 'AU'
  },
  contactPoint: {
    telephone: '',
    contactType: 'customer support',
    email: ''
  },
  sameAs: Object.values(SOCIAL_LINKS)
}
