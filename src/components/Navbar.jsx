"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LuSmartphone, LuMail } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className='bg-[#FFFFFF] px-4 py-2 mt-4 rounded-md flex items-center shadow-md'>
        <div>
            <Image
            src="/images/logo.png"
            alt='logo'
            width={174}
            height={60}
            />
        </div>
        <div className='flex items-center justify-between ml-20 w-full'>
            <ul className='flex items-center text-black gap-5'>
                <li>
                <Link href="/">Services</Link>
                </li>
                <li>
                <Link href="/">Media</Link>
                </li>
                <li>
                <Link href="/">Cases</Link>
                </li>
                <li>
                <Link href="/">FAQ</Link>
                </li>
                <li>
                <Link href="/">Contacts</Link>
                </li>
            </ul>
            <div className='flex text-green-400 items-center gap-8 '>
                <div className='flex items-center gap-1'>
                    <LuSmartphone/>
                    <p>+91 000000000</p>
                </div>
                <div className='flex items-center gap-1'>
                    <LuMail/>
                    <p>demo@gmail.com</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
