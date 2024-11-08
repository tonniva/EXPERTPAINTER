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
      <h1 className='p-4 text-center text-2xl font-extrabold leading-tight'>
        RENOVATION PAINTING
      </h1>
      <section className='px-4 py-2'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='flex justify-center'>
            {/* <iframe
              width='100%'
              height='500'
              src='https://www.youtube.com/embed/AEhVtgUG7no?autoplay=1&mute=1'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe> */}
            <video
              className='h-screen w-full rounded-lg object-cover'
              src='/videos/e0fa1ea7-2683-4dba-ade8-ec82409c3976.mp4'
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className='flex justify-center'>
            {/* <iframe
              width='100%'
              height='500'
              src='https://www.youtube.com/embed/D6KJ7-0FmyM?autoplay=1&mute=1'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe> */}
            <video
              className='h-screen w-full rounded-lg object-cover'
              src='/videos/ffef1808-7145-4b30-8705-e6831f6e3fbd.mp4'
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className='flex justify-center'>
            <video
              className='h-screen w-full rounded-lg object-cover'
              src='/videos/IMG_8412.MOV'
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className='flex justify-center'>
            <video
              className='h-screen w-full rounded-lg object-cover'
              src='/videos/7e7ba102-2652-4f59-8026-ca8ab35b939c.mp4'
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* <video
            className='h-screen w-full rounded-lg object-cover'
            src='/videos/e0fa1ea7-2683-4dba-ade8-ec82409c3976.mp4'
            autoPlay
            loop
            muted
            playsInline
          />
          <video
            className='h-screen w-full rounded-lg object-cover'
            src='/videos/ffef1808-7145-4b30-8705-e6831f6e3fbd.mp4'
            autoPlay
            loop
            muted
            playsInline
          /> */}
        </div>
      </section>
      {/* <section>
        <div className='flex justify-center'>
          <video
            className='h-screen w-full rounded-lg object-cover'
            src='/videos/IMG_8412.MOV'
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section> */}
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
      <h1 className='p-2 text-center text-2xl font-extrabold leading-tight'>
        BEFORE-AFTER
      </h1>
      <section>
        <div className='grid grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
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
