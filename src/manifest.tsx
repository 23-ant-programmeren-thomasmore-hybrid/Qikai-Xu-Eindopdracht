import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Portfolio of Qikai',
    short_name: 'Portfolio',
    description: 'This is a portfolio website made with Next.Js, TailwindCCS, Internationalization, Vercel and other styling components.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0e0d0c',
    theme_color: '#612020',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}