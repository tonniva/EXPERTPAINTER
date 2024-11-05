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

    </div>
  )
}
