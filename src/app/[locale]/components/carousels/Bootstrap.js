//carousels/Bootstrap.js
'use client'
import { useState } from 'react'
import { items } from '../../../../../public/Items.json'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BsFacebook } from 'react-icons/bs'

export default function BootstrapCarousel() {
  const { bootstrap } = items
  const [index, setIndex] = useState(0)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  return (
    <>
  
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {bootstrap.map(item => (
          <Carousel.Item
            key={item.id}
            interval={4000}
            className='w-full overflow-hidden rounded-lg bg-gray-200 size-car'
          >
            <img src={item.imageUrl} alt='slides' className='img-smooth' />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p className='text-2xl'>{item.body}</p>
              <button
                className='btn'
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
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}
