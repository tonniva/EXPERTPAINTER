import { useTranslations } from 'next-intl'
import Image from 'next/image'
export default function About() {
  const t = useTranslations('')
  return (
    // <div className='px-32 py-24 text-center text-2xl'>
    //   {t(
    //     'This_is_a_simple_about_page_just_to_show_how_you_can_use_the_internationalization_in_different_pages'
    //   )}
    // </div>
    <div>
      <section className='flex flex-col items-center justify-center bg-white py-24'>
        <Image
          src='/baner.png'
          alt='logo'
          width={1000}
          height={1000}
          className='rounded-lg bg-white object-contain'
        />
      </section>
      <section>
        <div className='relative h-screen w-full overflow-hidden'>
          <video
            className='absolute left-0 top-0 h-full w-full object-cover'
            src='/videos/11.mp4' // ระบุเส้นทางไฟล์วิดีโอที่นี่
            autoPlay
            loop
            muted
            playsInline
          />
          <div className='relative z-10 flex h-full items-center justify-center bg-black bg-opacity-50'>
            <Image
              src='/house_image_output.svg'
              alt='logo'
              width={500}
              height={500}
              className='rounded-lg object-contain  opacity-25'
            />
          </div>
        </div>
      </section>
      <section>
        <div className='map-container'> 
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.4870330414064!2d174.72697259999998!3d-36.8786955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47f5bc8e2375%3A0x22fb777fdda2b1e0!2sExpert%20Painter!5e0!3m2!1sen!2sth!4v1730699869499!5m2!1sen!2sth'
            width='600'
            height='450'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </section>
    </div>
  )
}
