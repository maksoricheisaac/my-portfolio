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
import educations from '../../public/data/education.json'


type Props = {}

export const Education = (props: Props) => {
  return (
    <section id="education" className='px-24 md:px-5 md:py-16'>
        <h2 className="text-4xl text-center font-bold">Education</h2>
        <p className='text-center my-3'>Learning is the key that opens the doors of knowledge, and education is the path that guides us through those doors.</p>
        <div className='grid md:grid-cols-2 gap-5 md:grid-rows-3'>
            {educations.map((item) => (
                <Card className=" w-80 md:w-[380px] lg:w-[500px] h-[110px] md:h-24 my-2 p-1 md:p-2" key={item.id}>
                <CardContent>
                    
                    <div className=' flex items-center justify-center gap-5'>
                        <Image src={udemy} className='h-20 w-36 rounded-lg ' alt="Udemy" width={250} height={250} />
                        <CardDescription>{item.name}</CardDescription>
                    </div>
                    
                </CardContent>
            </Card>
            ))}
        </div>
        
        
    </section>
  )
}

