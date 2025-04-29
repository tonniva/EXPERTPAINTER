'use client'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import BackgroundVideo from '../components/BackgroundVideo'
import ContentImage from './ContentImage'

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
      {/* Section 1 */}
      <section>
        <div className='relative h-[80vh] w-full overflow-hidden'>
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
                width={200}
                height={200}
                className='max-w-[100px] rounded-lg object-contain opacity-10 sm:max-w-[150px] md:max-w-[200px]'
              />
              <h1 className='text-xs font-bold leading-normal text-white opacity-10 sm:text-sm'>
                EXPERT PAINTER
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className='flex flex-col items-center justify-center bg-white py-20 m-auto max-w-5xl'>
        <h1 className='text-center text-xs font-extrabold leading-tight sm:px-10 sm:text-sm'>
          COMMERCIAL RESIDENTIAL
        </h1>
        <p className='my-4 w-full p-2 text-center text-xs leading-normal text-text-secondary sm:px-10 sm:text-sm'>
          Bring new life to your building with high-quality painting services
          from a professional team dedicated to every detail from start to
          finish.
        </p>
      </section>

      {/* Section 3 */}
      <section>
        <div className='relative h-[80vh] w-full overflow-hidden'>
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
                width={200}
                height={200}
                className='max-w-[100px] rounded-lg object-contain opacity-10 sm:max-w-[150px] md:max-w-[200px]'
              />
              <h1 className='text-xs font-bold leading-normal text-white opacity-10 sm:text-sm'>
                EXPERT PAINTER
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section
        ref={parallaxRef1}
        className='flex flex-col items-center justify-center bg-opacity-50 bg-cover bg-fixed py-20'
        // style={{
        //   backgroundImage:
        //     'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/nz.webp)',
        //   backgroundAttachment: 'fixed'
        // }}
      >
        <h1 className='pt-20 text-center text-xs font-extrabold leading-tight text-black sm:px-10 sm:text-sm'>
          RENOVATION PAINTING
        </h1>
        <p className='my-4 w-full p-1 text-center text-xs leading-normal text-black sm:px-10 sm:text-sm m-auto mx-5xl'>
          Elevate the beauty of your home or building with our renovation
          painting service, offering a fresh, modern look with long-lasting
          results.
        </p>
      </section>

      {/* Section 5 */}
      <section>
        <div className='relative h-[80vh] w-full overflow-hidden'>
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
                width={200}
                height={200}
                className='max-w-[100px] rounded-lg object-contain opacity-10 sm:max-w-[150px] md:max-w-[200px]'
              />
              <h1 className='text-xs font-bold leading-normal text-white opacity-10 sm:text-sm'>
                EXPERT PAINTER
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className='flex flex-col items-center justify-center bg-white py-20 m-auto max-w-5xl'>
        <h1 className='text-center text-xs font-extrabold leading-tight sm:px-10 sm:text-sm'>
          STOPPING PLASTERING
        </h1>
        <p className='my-4 w-full p-2 text-center text-xs leading-normal text-text-secondary sm:px-10 sm:text-sm'>
          Achieve a flawless, elegant finish with high-quality plastering,
          creating the perfect surface for durable and beautiful paint.
        </p>
      </section>

      {/* Section 7 */}
      <section>
        <div className='relative h-[80vh] w-full overflow-hidden'>
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
                width={200}
                height={200}
                className='max-w-[100px] rounded-lg object-contain opacity-10 sm:max-w-[150px] md:max-w-[200px]'
              />
              <h1 className='text-xs font-bold leading-normal text-white opacity-10 sm:text-sm'>
                EXPERT PAINTER
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 */}
      <section
        ref={parallaxRef2}
        className='flex flex-col items-center justify-center bg-opacity-50 bg-cover bg-fixed py-20'
        // style={{
        //   backgroundImage:
        //     'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/nz.webp)',
        //   backgroundAttachment: 'fixed'
        // }}
      >
        <h1 className='text-center text-xs font-extrabold leading-tight text-black sm:px-10 sm:text-sm m-auto max-w-5xl'>
          WATER BLASTING
        </h1>
        <p className='my-4 w-full p-1 text-center text-xs leading-normal text-black sm:px-10 sm:text-sm m-auto mx-5xl'>
          Refresh the appearance of your exterior surfaces with high-pressure
          water blasting, making your home or building look fresh and clean.
        </p>
      </section>

      {/* Section 9 */}
      <section>
        <div className='relative h-[80vh] w-full overflow-hidden'>
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
                width={200}
                height={200}
                className='max-w-[100px] rounded-lg object-contain opacity-10 sm:max-w-[150px] md:max-w-[200px]'
              />
              <h1 className='text-xs font-bold leading-normal text-white opacity-10 sm:text-sm'>
                EXPERT PAINTER
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10 */}
      <section className='flex flex-col items-center justify-center bg-white py-20 m-auto max-w-5xl'>
        <h1 className='text-center text-xs font-extrabold leading-tight sm:px-10 sm:text-sm'>
          ROOF SPRAYING PAINTING
        </h1>
        <p className='my-4 w-full p-2 text-center text-xs leading-normal text-text-secondary sm:px-10 sm:text-sm'>
          Protect and enhance the durability of your roof with our roof spraying
          service, ensuring it looks fresh and withstands all weather
          conditions.
        </p>
      </section>

      <ContentImage />
    </div>
  )
}

export default ParallaxSection