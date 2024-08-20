import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from '../ui/button'
import Image from 'next/image'
import udemy from '../../public/images/udemy.png'
import educations from '../../data/education.json'


type Props = {}

export const Education = (props: Props) => {
  return (
    <section id="education" className='px-24 md:px-5 md:py-16'>
        <h2 className="text-4xl text-center dark:text-primary font-bold" data-aos="fade-left">Education</h2>
        <p className='text-center my-3' data-aos="fade-top">Learning is the key that opens the doors of knowledge, and education is the path that guides us through those doors.</p>
        <div className='grid md:grid-cols-2 gap-5 md:grid-rows-3'>
            {educations.map((item) => (
                <Card data-aos="fade-right"  className="group flex items-center justify-center w-80 md:w-[380px] lg:w-[500px] h-[130px] md:h-32 my-2 py-2 md:p-2" key={item.id}>
                <CardContent>
                    
                    <div className=' flex items-center justify-center gap-5  w-full'>
                        <Image src={udemy} className='group-hover:scale-110 duration-300 h-20 mt-5  rounded-lg w-1/3' alt="Udemy" width={250} height={250} />
                        <CardDescription className='w-2/3 cursor-default'>{item.name}</CardDescription>
                    </div>
                    
                </CardContent>
            </Card>
            ))}
        </div>
        
        
    </section>
  )
}

