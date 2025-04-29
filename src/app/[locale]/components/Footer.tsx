'use client'
import Image from 'next/image'
import { FaBeer } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'

import { Link } from '@/src/navigation'
export const Footer = () => {
  return (
    <>
      {' '}
      <section className='bg-white py-20 text-black max-lg:py-10'>
        <div className='mx-auto grid  grid-cols-3 gap-7  py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <Image
              src='/sz.png'
              alt='logo'
              width={200}
              height={200}
              className='mx-auto rounded-lg  object-contain sm:mx-0'
            />
          </div> 
          <div className='m-auto text-center lg:text-left'>
            <h2 className='mb-3 text-xl font-semibold text-gray-500 hover:text-[#c02a2a]'>EXPERT PAINTER</h2>
            <div className='text-sm   max-lg:max-w-[500px] text-gray-500 hover:text-[#c02a2a]'>
              Call : 021 024 94072
            </div>
            <div className='email text-sm  max-lg:max-w-[500px] sm:whitespace-nowrap text-gray-500 hover:text-[#c02a2a]'>
              Email : EXPERTPAINTERLTD@GMAIL.COM
            </div>
          </div>
          <div className='m-auto'>
            <h2 className='mb-3 text-xl font-semibold text-gray-500 hover:text-[#c02a2a]'>Contact</h2>

            <div className='mx-auto sm:mx-0 text-center'>
              <button
                className='btn text-center'
                onClick={() => {
                  window.open(
                    'https://www.facebook.com/expertpainterltd',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }}
              >
                <BsFacebook size={40} color='#3b5998' className='hover:scale-125 cursor-pointer' />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
