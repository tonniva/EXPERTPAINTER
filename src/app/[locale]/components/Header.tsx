'use client'
import { Link } from '@/src/navigation'
//import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import GithubIcon from '../../icons/github'
import LogoIcon from '../../icons/logo'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BsFacebook } from 'react-icons/bs'
interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleCloseMenu = () => {
    setIsOpen(false)
  }

  const [isSticky, setIsSticky] = useState(false)
  const [ishidefixed, setishidefixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY > 500) {
        // ปรับค่าตามตำแหน่งที่ต้องการให้เปลี่ยนจาก fixed เป็น sticky
        console.log(isSticky)
        setIsSticky(true)
      } else {
        console.log(isSticky)
        setIsSticky(false)
      }

      if (window.scrollY > 100 && window.scrollY <= 200) {
        // ปรับค่าตามตำแหน่งที่ต้องการให้เปลี่ยนจาก fixed เป็น sticky
        setishidefixed(true)
        console.log('ishidefixed : ', ishidefixed)
      } else {
        setishidefixed(false)
        console.log('ishidefixed : ', ishidefixed)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div
      className={`${
        isSticky ? 'sticky top-0 bg-opacity-90' : 'fixed top-0 bg-opacity-100'
      } z-50 w-full transform transition-all duration-500 ease-in-out ${
        isSticky ? 'translate-y-0' : '-translate-y-2'
      }  ${ishidefixed ? 'opacity-0' : ''} `}
    >
      {/* <Link lang={locale} href='/'>3
        <div className='flex flex-row items-center'>
          <div className='mb-2 h-14 w-14'>
            <LogoIcon />
          </div>
          <strong className='mx-2 select-none'>Template</strong>
        </div>
      </Link> */}
      {/* <div className='flex flex-row items-center gap-3'>
        <nav className='mr-10 inline-flex gap-5'>
          <Link lang={locale} href={`/about`}>
            {t('About')}
          </Link>
          <a href=''>{t('Support')}</a>
          <a href=''>{t('Other')}</a>
        </nav>
        <ThemeSwitch />
        <LangSwitcher />
        <a
          href='https://github.com/yahyaparvar/nextjs-template'
          target='_blank'
        >
          <div className='size-8'>
            <GithubIcon />
          </div>
        </a>
      </div> */}

      {/* <nav className='navbar'>
        <div className='navbar-logo'>
          <a href='#'>
            <Image
              src='/house_image_output.svg'
              alt='logo'
              width={100}
              height={100}
              className='rounded-lg bg-white object-contain ivlogo'
            />
          </a>
        </div>
        <ul className='navbar-links'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li className='dropdown'>
            <a href='#'>Services</a>
            <ul className='dropdown-menu'>
              <li>
                <a href='#'>Interior Design</a>
              </li>
              <li>
                <a href='#'>Exterior Design</a>
              </li>
              <li>
                <a href='#'>3D Modeling</a>
              </li>
            </ul>
          </li>
          <li>
            <a href='#'>Portfolio</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav> */}

      <nav className='navbar top-0  z-50 py-2 shadow-md'>
        <div className='container mx-auto flex items-center justify-between px-4'>
          <div className='burger-menu' onClick={toggleMenu}>
            <div className={`line ${isOpen ? 'open' : ''}`}></div>
            <div className={`line ${isOpen ? 'open' : ''}`}></div>
            <div className={`line ${isOpen ? 'open' : ''}`}></div>
          </div>
          <div className='navbar-logo pl-3'>
            <a href='/'>
              <Image
                src='/LOGO_.png'
                alt='logo'
                width={59}
                height={59}
                className='ivlogo rounded-lg bg-white object-contain'
              />
            </a>
            {/* <div className='text-white'>EXPERT PAINTER</div> */}
          </div>

          <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <li>
              <Link lang={locale} href={`/`} onClick={handleCloseMenu}>
                {t('Home')}
              </Link>
            </li>

            <li>
              <Link lang={locale} href={`/portfolio`} onClick={handleCloseMenu}>
                Portfolio
              </Link>
              {/* <a href='/portfolio'>Portfolio</a> */}
            </li>
            <li>
              {' '}
              <Link lang={locale} href={`/contact`} onClick={handleCloseMenu}>
                {t('Contact')}
              </Link>
            </li>
            <li>
              <a
                onClick={() => {
                  // window.open(
                  //   'https://www.facebook.com/profile.php?id=100062997834650',
                  //   '_blank',
                  //   'noopener,noreferrer'
                  // )
                }}
              >
                <BsFacebook size={25} color='#3b5998' />
              </a>

              {/* 
              <button 
              onClick={() => {
                window.open(
                  'https://www.facebook.com/profile.php?id=100062997834650',
                  '_blank',
                  'noopener,noreferrer'
                )
              }}
            >
               <BsFacebook size={40} color="#fffff" />
            </button> */}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
