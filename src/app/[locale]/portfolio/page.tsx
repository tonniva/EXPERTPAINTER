import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Slider } from '../components/slider'
export default function About() {
  const t = useTranslations('')

  const images = [
    '/images/1.webp',
    '/images/2.webp',
    '/images/3.webp',
    '/images/4.webp',
    '/images/5.webp',
    '/images/6.webp',
    '/images/7.webp',
    '/images/8.webp',
    '/images/9.webp',
    '/images/10.webp',
    '/images/11.webp',
    '/images/12.webp',
    '/images/13.webp',
    '/images/14.webp',
    '/images/15.webp',
    '/images/16.webp',
    '/images/17.webp',
    '/images/18.webp',
    '/images/19.webp'
  ]

  return (
    <div className='py-20 text-center text-2xl'>
      <section>
        <Slider></Slider>
      </section>
      <section className='flex flex-col items-center justify-center bg-white py-24'>
        <Image
          src='/images_slide/car.webp'
          alt='logo'
          width={1000}
          height={1000}
          className='rounded-lg bg-white object-contain'
        />
      </section>
      <section>
        <div className='grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {images.map((src, index) => (
            <div
              key={index}
              className='h-64 w-full overflow-hidden rounded-lg bg-gray-200'
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
  )
}
