'use client'
import Image from 'next/image'
import { FaBeer } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'

import { Link } from '@/src/navigation'
export const Footer = () => {
  return (
    <>
      {' '}
      <section className='bg-black py-20 text-white max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <Image
              src='/sz.png'
              alt='logo'
              width={200}
              height={200}
              className='mx-auto rounded-lg bg-white object-contain sm:mx-0'
            />
          </div>
          <div className='m-auto'>
            <h2 className='mb-3 text-xl font-semibold'>EXPERT PAINTER</h2>
            <div className='text-sm text-orange-200 max-lg:max-w-[500px]'>
              Call : 021 024 94072
            </div>
            <div className='text-sm text-orange-200 max-lg:max-w-[500px]'>
              Email : EXPERTPAINTERLTD@GMAIL.COM
            </div>
          </div>
          <div className='m-auto'>
            <h2 className='mb-3 text-xl font-semibold'>Contact</h2>

            <div className='mx-auto sm:mx-0 text-center'>
              <button
                className='btn text-center'
                onClick={() => {
                  window.open(
                    'https://www.facebook.com/profile.php?id=100062997834650',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }}
              >
                <BsFacebook size={40} color='#3b5998' />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
