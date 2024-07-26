import React from 'react'
import Image from 'next/image'

const ProjectTeam = () => {
    return (
        <div className='h-[80vh] px-20 py-14 bg-graybackground gap-4 text-black flex items-center'>
            <div className='w-[65%] h-full flex flex-col gap-8'>
                <h1 className='text-4xl font-semibold  '>Our team</h1>
                <p className='text-sm'>Thousand is a full-cycle digital production company with its own product analytics, design, web and mobile development.</p>
                <div className='grid grid-cols-3'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-4xl font-bold'>28</h1>
                        <p className='text-gray-400'>team members</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-4xl font-bold'>+100</h1>
                        <p className='text-gray-400'>projects</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-4xl font-bold'>7 years</h1>
                        <p className='text-gray-400'>in IT sphere</p>
                    </div>
                </div>
                <p className='text-sm'>All the necessary specialists - from a designer to a tester - are on our staff. We hire the best specialists in the market. It's expensive but worth it</p>
            </div>
                <Image
                    src="/images/GroupFrame.png"
                    alt='Group'
                    width={600}
                    height={400}
                    className='shadow-xl'
                />
        </div>
    )
}

export default ProjectTeam
