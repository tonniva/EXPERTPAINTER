'use client'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import BackgroundVideo from '../components/BackgroundVideo'

const ParallaxSection: React.FC = () => {
  const parallaxRef1 = useRef<HTMLDivElement | null>(null)
  const parallaxRef2 = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef1.current) {
        const offset = window.pageYOffset
        parallaxRef1.current.style.backgroundPositionY = `${offset * 0.5}px`
      }
      if (parallaxRef2.current) {
        const offset = window.pageYOffset
        parallaxRef2.current.style.backgroundPositionY = `${offset * 0.5}px`
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>   
          <section> 
        <div className='relative h-screen w-full overflow-hidden'>
          <video
            className='absolute left-0 top-0 h-full w-full object-cover'
            src='/videos/compo/1.mp4'
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
      <section className='flex flex-col items-center justify-center bg-white py-40'>
        <h1 className='text-center text-5xl font-extrabold leading-tight'>
          COMMERCIAL RESIDENTIAL
        </h1>
        <p className='my-6 px-20 text-center text-2xl text-text-secondary'>
          Bring new life to your building with high-quality painting services
          from a professional team dedicated to every detail from start to
          finish.
        </p>
        
      </section>
      <section> 
        <div className='relative h-screen w-full overflow-hidden'>
          <video
            className='absolute left-0 top-0 h-full w-full object-cover'
            src='/videos/compo/5.mp4'
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

      {/* Section 2: Transparent Background with Parallax Effect */}
      <section
        ref={parallaxRef1}
        className='flex flex-col items-center justify-center bg-opacity-50 bg-cover bg-fixed py-40'
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/nz.webp)',
          backgroundAttachment: 'fixed'
        }}
      >
        <h1 className='text-center text-5xl font-extrabold leading-tight text-white'>
          RENOVATION PAINTING
        </h1>
        <p className='my-6 px-20 text-center text-2xl text-white'>
          Elevate the beauty of your home or building with our renovation
          painting service, offering a fresh, modern look with long-lasting
          results.
        </p>
        
      </section>
      <section> 
        <div className='relative h-screen w-full overflow-hidden'>
          <video
            className='absolute left-0 top-0 h-full w-full object-cover'
            src='/videos/compo/2.mp4'
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

      {/* Section 3: White Background */}
      <section className='flex flex-col items-center justify-center bg-white py-40'>
        <h1 className='text-center text-5xl font-extrabold leading-tight'>
          STOPPING PLASTERING
        </h1>
        <p className='my-6 px-20 text-center text-2xl text-text-secondary'>
          Achieve a flawless, elegant finish with high-quality plastering,
          creating the perfect surface for durable and beautiful paint.
        </p>
      </section>
      <section>
        <div className='relative h-screen w-full overflow-hidden'>
          <video
            className='absolute left-0 top-0 h-full w-full object-cover'
            src='/videos/compo/9.mp4'
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

      {/* Section 4: Transparent Background with Parallax Effect */}
      <section
        ref={parallaxRef2}
        className='flex flex-col items-center justify-center bg-opacity-50 bg-cover bg-fixed py-40'
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/nz.webp)',
          backgroundAttachment: 'fixed'
        }}
      >
        <h1 className='text-center text-5xl font-extrabold leading-tight text-white'>
          WATER BLASTING
        </h1>
        <p className='my-6 px-20 text-center text-2xl text-white'>
          Refresh the appearance of your exterior surfaces with high-pressure
          water blasting, making your home or building look fresh and clean.
        </p>
      </section>
      <section>
        <div className='relative h-screen w-full overflow-hidden'>
          <video
            className='absolute left-0 top-0 h-full w-full object-cover'
            src='/videos/compo/7.mp4'
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

      {/* Section 5: White Background */}
      <section className='flex flex-col items-center justify-center bg-white py-40'>
        <h1 className='text-center text-5xl font-extrabold leading-tight'>
          ROOF SPRAYING PAINTING
        </h1>
        <p className='my-6 px-20 text-center text-2xl text-text-secondary'>
          Protect and enhance the durability of your roof with our roof spraying
          service, ensuring it looks fresh and withstands all weather
          conditions.
        </p>
      </section>
      <section>
        <div className='relative h-screen w-full overflow-hidden'>
          <video
            className='absolute left-0 top-0 h-full w-full object-cover'
            src='/videos/compo/10.mp4'
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
    </div>
  )
}

export default ParallaxSection
