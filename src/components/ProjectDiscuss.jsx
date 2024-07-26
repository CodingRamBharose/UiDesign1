
import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const ProjectDiscuss = () => {
  return (
    <div className='flex w-full justify-between gap-4 text-black bg-projectdiscussGradient mt-8 px-20 py-10'>
      <div className='flex flex-col gap-4 text-white w-[54%]'>
        <h1 className='text-4xl font-semibold pt-4'>Let's discuss <br />Your project</h1>
        <p>Let's figure out how to create an effective application, <br />its cost and terms of its development</p>
      </div>
      <div className='bg-white px-6 py-4 shadow-xl rounded-xl text-black'>
        <div className='flex gap-4 flex-col'>
          <div className='flex flex-col gap-2'>
            <div className='grid grid-cols-2 gap-6'>
              <div className='mt-4'>
                <p className='text-gray-500 text-sm'>Full Name</p>
                <p>My Name</p>
                <hr className='border-gray-300 border-t-2 mt-2' />
              </div>
              <div className='mt-4'>
                <p className='text-gray-500 text-sm'>Phone number</p>
                <div className='flex gap-2'>
                  <Image src="/images/indiaflag.png" alt='indiaflag' width={18} height={22} />
                  <p>+91</p>
                  <p>0000000000</p>
                </div>
                <hr className='border-gray-300 border-t-2 mt-2' />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-6'>
              <div className='mt-4'>
                <p className='text-gray-500 text-sm'>Business name</p>
                <p>ABC Technologies PVT LTD</p>
                <hr className='border-gray-300 border-t-2 mt-2' />
              </div>
              <div className='mt-4'>
                <p className='text-gray-500 text-sm'>Business mail</p>
                <div className='flex gap-2'>
                  <p>demoaccount@gmail.com</p>
                </div>
                <hr className='border-gray-300 border-t-2 mt-2' />
              </div>
            </div>
          </div>
          <div className='flex items-end w-full justify-end'>
            <Button variant="lightorange">Discuss the project</Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProjectDiscuss
