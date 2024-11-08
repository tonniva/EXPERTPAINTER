'use client'

import Image from 'next/image'
import { useState } from 'react'

// If you are looking for mobile support, please refer to the
// following implementation by @daviddecorso
// https://github.com/unhingedmagikarp/comparison-slider/tree/mobile-support

export const Slider = () => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return

    const rect = event.currentTarget.getBoundingClientRect()
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))

    setSliderPosition(percent)
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <>
      {/* <h1 className='pt-2 text-center text-xl font-extrabold leading-tight'>
        Before-After
      </h1> */}
      {/* <div className='relative w-full' onMouseUp={handleMouseUp}>
        <div
          className='relative m-auto aspect-[70/45] w-full max-w-[700px] select-none overflow-hidden'
          onMouseMove={handleMove}
          onMouseDown={handleMouseDown}
        >
          <Image
            alt=''
            fill
            draggable={false}
            priority
            src='/images_port/1.1.webp'
          />

          <div
            className='absolute left-0 right-0 top-0 m-auto aspect-[70/45] w-full max-w-[700px] select-none overflow-hidden'
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              fill
              priority
              draggable={false}
              alt=''
              src='/images_port/1.webp'
            />
          </div>
          <div
            className='absolute bottom-0 top-0 w-1 cursor-ew-resize bg-white'
            style={{
              left: `calc(${sliderPosition}% - 1px)`
            }}
          >
            <div className='absolute -left-1 top-[calc(50%-5px)] h-3 w-3 rounded-full bg-white' />
          </div>
        </div>
        <div
          className='relative m-auto aspect-[70/45] w-full max-w-[700px] select-none overflow-hidden'
          onMouseMove={handleMove}
          onMouseDown={handleMouseDown}
        >
          <Image
            alt=''
            fill
            draggable={false}
            priority
            src='/images_port/2.2.webp'
          />

          <div
            className='absolute left-0 right-0 top-0 m-auto aspect-[70/45] w-full max-w-[700px] select-none overflow-hidden'
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image
              fill
              priority
              draggable={false}
              alt=''
              src='/images_port/2.webp'
            />
          </div>
          <div
            className='absolute bottom-0 top-0 w-1 cursor-ew-resize bg-white'
            style={{
              left: `calc(${sliderPosition}% - 1px)`
            }}
          >
            <div className='absolute -left-1 top-[calc(50%-5px)] h-3 w-3 rounded-full bg-white' />
          </div>
        </div>
      </div> */}
    </>
  )
}
