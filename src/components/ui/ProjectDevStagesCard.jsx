import Image from "next/image"

const ProjectDevStagesCard = ({title,image,discription}) => {
  return (
    <div className='shadow-xl rounded-md'>
                    <div className='p-4 flex flex-col justify-evenly gap-2'>
                        <div className='flex items-center gap-4'>
                            <Image
                            src={image}
                            alt='planing'
                            width={48}
                            height={48}
                            />
                            <h3 className='font-bold'>{title}</h3>
                        </div>
                        <p className='text-sm'>{discription}</p>
                    </div>
                </div>
  )
}

export default ProjectDevStagesCard
