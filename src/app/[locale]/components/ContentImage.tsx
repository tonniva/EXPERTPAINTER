import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Slider } from '../components/slider'
import BootstrapCarousel from '../components/carousels/Bootstrap'
export default function About() {
  const t = useTranslations('')

  const images = [
    '/images/port/3.webp',
    '/images/port/4.webp',
    // '/images/port/5.webp',
    '/images/port/6.webp',
    '/images/port/7.webp',
    '/images/port/8.webp',
    '/images/port/9.webp',
    '/images_port/1.webp',
    '/images_port/1.1.webp',
    '/images_port/2.webp',
    '/images_port/2.2.webp',
    '/images/port/1.webp',
    '/images/port/2.webp'
  ]

  return (
    <div>
      <section>
        <BootstrapCarousel />
      </section>
      <div className='m-x5xl m-auto py-20 text-center text-2xl'>
        <h1 className='p-2 text-center text-sm/[12px] font-extrabold leading-tight sm:px-20 lg:text-xl'>
          BEFORE-AFTER
        </h1>
        <section>
          <div className='m-auto grid max-w-7xl grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4'>
            {images.map((src, index) => (
              <div
                key={index}
                className='w-full overflow-hidden rounded-lg bg-gray-200'
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={300}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
