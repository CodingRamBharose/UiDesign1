import React from 'react'
import Image from 'next/image'
import ProjectDevStagesCard from './ui/ProjectDevStagesCard'

const ProjectDevStages = () => {
    const devStages = [
        {
            "title": "Analysis",
            "image" : "/images/stages/planing.png",
            "discription": "We craft precise technical specs, aligning with your business, technology, and user requirements."
        },
        {
            "title": "Design",
            "image" : "/images/stages/graphic-design.png",
            "discription": "We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces."
        },
        {
            "title": "Development",
            "image" : "/images/stages/coding-language.png",
            "discription": "We create an extensible architecture, write clean and stable code. We integrate with customer technologies."
        },
        {
            "title": "Testing",
            "image" : "/images/stages/security.png",
            "discription": "We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions"
        },
        {
            "title": "Launching",
            "image" : "/images/stages/hosting.png",
            "discription": "We design the application page and publish it in the App Store and Google Play stores."
        },
        {
            "title": "Support",
            "image" : "/images/stages/application.png",
            "discription": "We monitor the stability of the application, update it for new devices and versions of iOS and Android."
        }
    ];

    const col1 = devStages.slice(0, 3);
  const col2 = devStages.slice(3, 6);

  return (
    <div className='min-h-screen w-full text-black py-16'>
        <h1 className='text-4xl font-bold'>Application Development Stages</h1>
        <div className='grid grid-cols-3 mt-4'>
            <div className='grid'>
                {col1.map((devStage,index)=>(
                    <ProjectDevStagesCard title={devStage.title} image={devStage.image} discription={devStage.discription} key={index} />
                ))}
            </div>
            <div>
                <Image
                src="/images/dashboard.png"
                alt='dashboardimage'
                width={440}
                height={564}
                />
            </div>
            <div className='grid'>
                {col2.map((devStage,index)=>(
                    <ProjectDevStagesCard title={devStage.title} image={devStage.image} discription={devStage.discription} key={index} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProjectDevStages
