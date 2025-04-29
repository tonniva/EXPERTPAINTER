import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Slider } from '../components/slider'
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
    <div className='py-20 text-center text-2xl'>
      <h1 className='p-4 pt-20 text-center text-sm/[12px] font-extrabold leading-tight sm:px-20 lg:text-xl'>
        RENOVATION PAINTING
      </h1>
      <section className='m-auto  px-4 py-2'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='flex  justify-center lg:justify-end'>
            <video
              className='h-[50vh] w-[80%] max-w-[600px] rounded-lg object-cover'
              src='/videos/e0fa1ea7-2683-4dba-ade8-ec82409c3976.mp4'
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className='flex   justify-center lg:justify-start'>
            <video
              className='h-[50vh] w-[80%] max-w-[600px] rounded-lg object-cover'
              src='/videos/ffef1808-7145-4b30-8705-e6831f6e3fbd.mp4'
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className='flex  justify-center  lg:justify-end'>
            <video
              className='h-[50vh] w-[80%] max-w-[600px] rounded-lg object-cover'
              src='/videos/IMG_8412.MOV'
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className='flex  justify-center  lg:justify-start'>
            <video
              className='h-[50vh] w-[80%] max-w-[600px] rounded-lg object-cover'
              src='/videos/7e7ba102-2652-4f59-8026-ca8ab35b939c.mp4'
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </section>
      <section>
        <Slider></Slider>
      </section>
      <section className='flex flex-col items-center justify-center   py-24'>
        <Image
          src='/images_slide/car.webp'
          alt='logo'
          width={1000}
          height={1000}
          className='rounded-lg   object-contain'
        />
      </section>
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
  )
}
