"use client"
import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import { Button } from "@/components/ui/button"


const Main = () => {
    return (
        <div className="relative h-screen overflow-hidden">
            <div className="absolute inset-0 bg-graybackground"></div>

            <div className="absolute inset-0 flex justify-end">
                <Image
                    src="/images/Group.png"
                    alt="Background Image"
                    width={624}
                    height={1976.98}
                    objectFit='cover'
                />
            </div>

            <div className="relative z-10 px-20 flex flex-col gap-4">
                <Navbar />
                <div className='text-black w-[48%] flex flex-col gap-2'>
                    <h1 className='text-4xl font-semibold'><span className='text-orangeyellow font-bold '>User-Centric Excellence</span>: Our <span className='font-bold'>App Development services</span> Tackles Your Pain Points</h1>
                    <p>Experience a Seamless Digital Journey with <span className='text-lightgreen font-bold'>Desun</span> - Where Every Line of Code Resolves Your Challenges and <span className='text-[#FFBA00] font-semibold'>Elevates Your App Experience</span> to Unparalleled Heights.</p>
                </div>
                <div className='bg-white p-3 shadow-xl w-[56%] rounded-md text-black'>
                    <h4 className='text-xl font-semibold'>Leave your contacts and we will call you back
                        within 30 minutes</h4>
                    <div className='flex gap-2'>
                        <div className='flex flex-col gap-4'>
                            <div className='grid grid-cols-2 gap-10'>
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
                            <div className='grid grid-cols-2 gap-10'>
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
                        <div className='flex items-end'>
                        <Button variant="lightgreen">Get <br />consultation</Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
