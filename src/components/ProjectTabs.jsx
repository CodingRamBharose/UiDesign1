import Image from "next/image"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const ProjectTabs = () => {
  return (
    <>
    <div className="text-black w-[60%] flex gap-4 flex-col mt-20 mb-10">
      <h1 className="text-4xl font-semibold">Projects we are proud of</h1>
      <p>Our software development company is truly proud of the wonderful clients we have worked with. We enjoy a long-term partnership</p>
    </div>
    <Tabs defaultValue="project1">
      <TabsList className="grid w-[40%] grid-cols-4 gap-12">
        <TabsTrigger value="project1">Project 1</TabsTrigger>
        <TabsTrigger value="project2">Project 2</TabsTrigger>
        <TabsTrigger value="project3">Project 3</TabsTrigger>
        <TabsTrigger value="project4">Project 4</TabsTrigger>

      </TabsList>
      <TabsContent value="project1">
        <div className="flex w-full mt-10 min-h-[79vh]">
          <div className="text-black flex gap-8 flex-col w-[60%]">
            <h1 className="text-4xl font-bold">Project 1</h1>
            <p>Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels</p>
            <h4>Business analysis <span className="text-orangeyellow">/</span> iOS <span className="text-orangeyellow">/</span> Android <span className="text-orangeyellow">/</span> QA <span className="text-orangeyellow">/</span> UI<span className="text-orangeyellow">/</span>UX Design</h4>
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/indialocation.png"
                  alt="image"
                  width={24}
                  height={24}
                />
                <h5>India</h5>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/realstate.png"
                  alt="image"
                  width={24}
                  height={24}
                />
                <h5>Real State</h5>
              </div>
            </div>
            <div className="flex gap-12">
              <div className="flex flex-col">
                <h2 className="font-bold text-3xl">400%</h2>
                <h3 className="text-gray-700">User Growth</h3>
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold text-3xl">+ 200 000</h2>
                <h3 className="text-gray-700">Active Users</h3>
              </div>
            </div>
            <div className="flex gap-5">
              <Image
                src="/images/appstore.png"
                alt="appstore"
                width={148}
                height={40}
              />
              <Image
                src="/images/googleplay.png"
                alt="appstore"
                width={148}
                height={40}
              />
            </div>
          </div>
          <div>
            <Image
              src="/images/Projectimage.png"
              alt="projectimage"
              width={446}
              height={449}
            />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="project2">
        <div className="flex w-full mt-10 min-h-[79vh]">
          <h1 className="text-black">Project 2</h1>
        </div>
      </TabsContent>
      <TabsContent value="project3">
        <div className="flex w-full mt-10 min-h-[79vh]">
          <h1 className="text-black">Project 3</h1>
        </div>
      </TabsContent>
      <TabsContent value="project4">
        <div className="flex w-full mt-10 min-h-[79vh]">
          <h1 className="text-black">Project 4</h1>
        </div>
      </TabsContent>
    </Tabs>
    </>

  )
}

export default ProjectTabs
