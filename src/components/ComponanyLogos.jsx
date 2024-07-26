"use client"
import React from 'react'
import Image from 'next/image'

const ComponanyLogos = () => {
    const images=[
        {src:"/images/image11.png"},
        {src:"/images/image12.png"},
        {src:"/images/image13.png"},
        {src:"/images/image14.png"},
        {src:"/images/image15.png"},
        {src:"/images/image16.png"},
    ]
  return (
    <div className='flex justify-between border-t-2 border-gray-300 bprder border-b-2 m-12'>
      {images.map((image,index)=>(
        <Image
            src={image.src}
            alt='componany logo'
            width={163.64}
            height={72.06}
            key={index}
            className='mt-10 mb-10'
        />
      ))}
    </div>
  )
}

export default ComponanyLogos
