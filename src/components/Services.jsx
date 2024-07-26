"use client"
import React from 'react'
import ComponanyLogos from './ComponanyLogos'
import Link from 'next/link'
import { PiGreaterThan } from "react-icons/pi";


const Services = () => {
    const services = [
        { service: "iOS  development" },
        { service: "Android development" },
        { service: "Web development" },
        { service: "UI/UX design" },
        { service: "Testing" },
        { service: "Launch" },
        { service: "IT consulting" },
    ]
    return (
        <div className='bg-white flex flex-col h-screen'>
            <ComponanyLogos />
            <div className='text-black px-20 flex'>
                <div className='flex flex-col gap-4 w-[70%]'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-4xl font-semibold'>Full development cycle</h1>
                        <p>We use proven technologies</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <h4 className='text-xl font-semibold'>Web</h4>
                            <p>PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js/ <br /> Nuxt / MySQL / Laravel / GO lang / django / Python</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h4 className='text-xl font-semibold'>Mobile</h4>
                            <p>Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / <br /> Coroutine / RxJava / RxSwift / Unit Test / Navigation</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    {services.map((service,index)=>(
                        <div className='flex items-center gap-3 cursor-pointer'>
                        <Link className='hover:font-semibold hover:border-b-2 transition duration-500 border-[#80A948] w-fit ' href="/">{service.service}</Link>
                        <PiGreaterThan/>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
