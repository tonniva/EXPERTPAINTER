import { useTranslations } from 'next-intl'
import Button from './components/Button'
import Image from 'next/image'
import Content from './components/Content'
 
import BootstrapCarousel from './components/carousels/Bootstrap'
export default function DashboardPage() {
  const t = useTranslations('')
  const images = [
    '/images/port/1.webp',
    '/images/port/2.webp',
    '/images/port/3.webp',
    '/images/port/4.webp',
    '/images/port/5.webp',
    '/images/port/6.webp',
    '/images/port/7.webp',
    '/images/port/8.webp',
    '/images/port/9.webp',
    '/images/port/10.webp'
  ]

  return (
    <div>
      <Content></Content> 

    </div>
  )
}
