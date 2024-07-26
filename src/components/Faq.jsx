"use client"
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const Faq = () => {
    return (
        <div className='h-screen text-black bg-white px-20 py-16'>
            <h1 className='text-4xl font-semibold'>FAQ</h1>
            <Accordion type="single" collapsible className="w-full grid grid-cols-2 gap-6 mt-10">
                <div className='border-t-2 border-gray-100'>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is the cost of a mobile application?</AccordionTrigger>
                        <AccordionContent>
                            text                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Do you provide a guarantee for the mobile application?</AccordionTrigger>
                        <AccordionContent>
                            text
                        </AccordionContent>
                    </AccordionItem>
                </div>
                <div className='border-t-2 border-gray-100'>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>How long will development take?</AccordionTrigger>
                        <AccordionContent>
                            Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer. <br />
                            <br />
                            Average development time from start to finished application: <br />
                            Medium projects up to <span className='font-semibold'>3 months</span>. <br />
                            Large projects about <span className='font-semibold'>4-6 months</span>. <br />
                            To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality. <br />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>I will not tell my idea, do you guarantee confidentiality?</AccordionTrigger>
                        <AccordionContent>
                            text
                        </AccordionContent>
                    </AccordionItem>
                </div>
            </Accordion>
        </div>
    )
}

export default Faq
