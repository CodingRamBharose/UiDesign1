import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-[65vh] px-20 bg-white py-10'>
        <div className='bg-black h-full w-full rounded-2xl p-6 flex flex-col items-center gap-8'>
            <Image
            src="/images/logo1.png"
            alt='logo'
            width={290}
            height={113}
            />
            <div className='flex justify-between w-full px-20'>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-3 text-gray-400'>
                    <Image 
                     src="/images/footer/footer1.png"
                     alt='contact'
                     width={13.8}
                     height={19.8}
                    />
                    <p>Contact nums</p>
                  </div>
                  <p>+91 0000000000</p>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-3 text-gray-400'>
                    <Image 
                     src="/images/footer/footer2.png"
                     alt='contact'
                     width={24}
                     height={24}
                    />
                    <p>Gmail</p>
                  </div>
                  <p>demo@gmail.com</p>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-3 text-gray-400'>
                    <Image 
                     src="/images/footer/footer3.png"
                     alt='contact'
                     width={24}
                     height={24}
                    />
                    <p>Adress</p>
                  </div>
                  <p>Mumbai, India</p>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-3 text-gray-400'>
                    <Image 
                     src="/images/footer/footer4.png"
                     alt='contact'
                     width={24}
                     height={24}
                    />
                    <p>Leave a request</p>
                  </div>
                  <p>Leave a request</p>
                </div>
            </div>
            <p className="text-sm text-gray-400">We work throughout the world</p>
        </div>
    </div>
  )
}

export default Footer
