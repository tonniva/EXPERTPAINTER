import { useTranslations } from 'next-intl'
import Button from './components/Button'
import Image from 'next/image'
import Content from './components/Content'

import BootstrapCarousel from './components/carousels/Bootstrap'
export default function DashboardPage() {
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
    '/images/19.webp',
    '/images/1.webp'
  ]

  return (
    <div>
       <Content></Content>
      {/* <section>
        <div className='relative h-screen w-full overflow-hidden'>
          <video
            className='absolute left-0 top-0 h-full w-full object-cover'
            src='/videos/2.mp4'
            autoPlay
            loop
            muted
            playsInline
          />
          <div className='relative z-10 flex h-full items-center justify-center bg-black bg-opacity-50'>
            <div className='relative flex h-full w-full flex-col items-center justify-center px-4 text-center'>
              <Image
                src='/house_image_output.svg'
                alt='logo'
                width={500}
                height={500}
                className='max-w-xs rounded-lg object-contain opacity-10 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'
              />
              <h1 className='text-3xl font-bold text-white  sm:text-4xl md:text-5xl lg:text-xl opacity-10'>
                EXPERT PAINTER
              </h1>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section>
        <div className='relative h-screen w-full overflow-hidden'>
          <video
            className='absolute left-0 top-0 h-full w-full object-cover'
            src='/videos/1.mp4'
            autoPlay
            loop
            muted
            playsInline
          />
          <div className='relative z-10 flex h-full items-center justify-center bg-black bg-opacity-50'>
            <div className='relative flex h-full w-full flex-col items-center justify-center px-4 text-center'>
              <Image
                src='/house_image_output.svg'
                alt='logo'
                width={500}
                height={500}
                className='max-w-xs rounded-lg object-contain opacity-10 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'
              />
              <h1 className='text-3xl font-bold text-white  sm:text-4xl md:text-5xl lg:text-xl opacity-10'>
                EXPERT PAINTER
              </h1>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section>
        <div className='relative h-screen w-full overflow-hidden'>
          <video
            className='absolute left-0 top-0 h-full w-full object-cover'
            src='/videos/3.mp4'
            autoPlay
            loop
            muted
            playsInline
          />
          <div className='relative z-10 flex h-full items-center justify-center bg-black bg-opacity-50'>
            <div className='relative flex h-full w-full flex-col items-center justify-center px-4 text-center'>
              <Image
                src='/house_image_output.svg'
                alt='logo'
                width={500}
                height={500}
                className='max-w-xs rounded-lg object-contain opacity-10 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'
              />
              <h1 className='text-3xl font-bold text-white  sm:text-4xl md:text-5xl lg:text-xl opacity-10'>
                EXPERT PAINTER
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='relative h-screen w-full overflow-hidden'>
          <video
            className='absolute left-0 top-0 h-full w-full object-cover'
            src='/videos/4.mp4'
            autoPlay
            loop
            muted
            playsInline
          />
          <div className='relative z-10 flex h-full items-center justify-center bg-black bg-opacity-50'>
            <div className='relative flex h-full w-full flex-col items-center justify-center px-4 text-center'>
              <Image
                src='/house_image_output.svg'
                alt='logo'
                width={500}
                height={500}
                className='max-w-xs rounded-lg object-contain opacity-10 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'
              />
              <h1 className='text-3xl font-bold text-white  sm:text-4xl md:text-5xl lg:text-xl opacity-10'>
                EXPERT PAINTER
              </h1>
            </div>
          </div>
        </div>
      </section>


     
      <section>
        <div className='relative h-screen w-full overflow-hidden'>
          <video
            className='absolute left-0 top-0 h-full w-full object-cover'
            src='/videos/6.mp4'
            autoPlay
            loop
            muted
            playsInline
          />
          <div className='relative z-10 flex h-full items-center justify-center bg-black bg-opacity-50'>
            <div className='relative flex h-full w-full flex-col items-center justify-center px-4 text-center'>
              <Image
                src='/house_image_output.svg'
                alt='logo'
                width={500}
                height={500}
                className='max-w-xs rounded-lg object-contain opacity-10 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'
              />
              <h1 className='text-3xl font-bold text-white  sm:text-4xl md:text-5xl lg:text-xl opacity-10'>
                EXPERT PAINTER
              </h1>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section>
        <div className='relative h-screen w-full overflow-hidden'>
          <video
            className='absolute left-0 top-0 h-full w-full object-cover'
            src='/videos/7.mp4'
            autoPlay
            loop
            muted
            playsInline
          />
          <div className='relative z-10 flex h-full items-center justify-center bg-black bg-opacity-50'>
            <div className='relative flex h-full w-full flex-col items-center justify-center px-4 text-center'>
              <Image
                src='/house_image_output.svg'
                alt='logo'
                width={500}
                height={500}
                className='max-w-xs rounded-lg object-contain opacity-10 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'
              />
              <h1 className='text-3xl font-bold text-white  sm:text-4xl md:text-5xl lg:text-xl opacity-10'>
                EXPERT PAINTER
              </h1>
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <BootstrapCarousel />
      </section>

      {/* <div className='mt-4 flex flex-row gap-4'>
          <a
            href='https://github.com/new?template_name=nextjs-template&template_owner=yahyaparvar'
            target='_blank'
          >
            <Button rounded size='large'>
              {t('Use_Template')}
            </Button>
          </a>
          <a
            href='https://github.com/yahyaparvar/nextjs-template'
            target='_blank'
          >
            <Button rounded size='large' variant='secondary'>
              {t('Learn_More')}
            </Button>
          </a>
        </div> */}

      {/* <section>
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
      </section> */}
    </div>
  )
}
