"use client"
import Image from 'next/image'; 

const ProjectIndustries = () => {

    const frames = [
        { "title": "Social media", "frame": "/images/frame1.png" },
        { "title": "Fitness and sport", "frame": "/images/frame2.png" },
        { "title": "Bank", "frame": "/images/frame3.png" },
        { "title": "Construction", "frame": "/images/frame4.png" },
        { "title": "Game projects", "frame": "/images/frame5.png" },
        { "title": "Education", "frame": "/images/frame6.png" },
        { "title": "Auto, transport", "frame": "/images/frame7.png" },
        { "title": "Medicine, health", "frame": "/images/frame8.png" },
        { "title": "Restaurants, food delivery", "frame": "/images/frame9.png" },
        { "title": "Marketplaces", "frame": "/images/frame10.png" },
        { "title": "AR technology", "frame": "/images/frame11.png" },
        { "title": "TV series", "frame": "/images/frame12.png" },
        { "title": "Startups", "frame": "/images/frame13.png" },
        { "title": "Religion", "frame": "/images/frame14.png" },
        { "title": "Online courses", "frame": "/images/frame15.png" }
      ];

  const col1 = frames.slice(0, 5);
  const col2 = frames.slice(5, 10);
  const col3 = frames.slice(10);

  return (
    <>
      <div className='text-black text-4xl font-semibold '>
        <h1>Developed more than <span className='text-lightgreen font-bold'>100</span> <br /> projects in <span className='text-lightgreen font-bold'>15</span> industries</h1>
      </div>
      <div className='mt-10 grid grid-cols-3 gap-4'>
        <div>
          {col1.map((item, index) => (
            <div className='flex items-center gap-2 mb-4' key={index}>
              <Image
                src={item.frame}
                alt={item.title}
                width={44}
                height={44}
                className='rounded'
              />
              <h4 className='text-black font-semibold'>{item.title}</h4>
            </div>
          ))}
        </div>
        <div>
          {col2.map((item, index) => (
            <div className='flex items-center gap-2 mb-4' key={index}>
              <Image
                src={item.frame}
                alt={item.title}
                width={44}
                height={44}
                className='rounded'
              />
              <h4 className='text-black font-semibold'>{item.title}</h4>
            </div>
          ))}
        </div>
        <div>
          {col3.map((item, index) => (
            <div className='flex items-center gap-2 mb-4' key={index}>
              <Image
                src={item.frame}
                alt={item.title}
                width={44}
                height={44}
                className='rounded'
              />
              <h4 className='text-black font-semibold'>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProjectIndustries
