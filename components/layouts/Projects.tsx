"use client"
import React from 'react'
import projects from '../../data/projects.json'

import img1 from '../../public/images/projects/project1.png'
import img2 from '../../public/images/projects/project2.png'
import img3 from '../../public/images/projects/project3.png'
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from '../ui/3d-card'

import Link from 'next/link'
import { CardFooter } from '../ui/card'



type Project = {
    id: number,
    title: string,
    desc: string,
    link: string,
    languages: string
}

const imgs = [img1, img2, img3]

const getImg = (id:number) => {
    const img = imgs[id - 1]
    return <Image alt="image"  src={img} width={250} height={250}  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"/>
}

type Props = {}

const Projects = (props: Props) => {
  return (
    <section id="projects" className='px-24 md:my-20 lg:py-20 md:px-5 lg:px-24 my-20'>
       <div className="space-y-2 flex flex-col items-center justify-center">
            <p className="text-4xl font-bold text-center dark:text-primary" data-aos="fade-left">My Projects</p>
            <h3 className="text-xl font-bold tracking-tighter my-4" data-aos="zoom-in">Discover my latest works</h3>
            <p className="text-muted-foreground md:text-md/relaxed text-center" data-aos="zoom-in">I work on a wide variety of projects, from simple websites to complex web applications. Here are some of my favorites.</p>
        </div>
        <div data-aos="fade-right" className='flex flex-col gap-2 md:grid md:grid-cols-3 items-center md:gap-5 justify-center lg:grid  grid-cols-3'>
            {projects.map((project: Project) => (
                <CardContainer  key={project.id} className="inter-var ">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-primary"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {project.desc}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    {getImg(project.id)}
                  </CardItem>
                  <p className="text-md my-5 text-neutral-500"> {project.languages} </p>
                  <div className="flex justify-between items-center">
                    
                    <Link
                      href={project.link}
                      
                      className="px-4 py-2 rounded-xl text-primary-foreground bg-primary text-xs font-bold"
                    >
                      Voir plus
                    </Link>
                  </div>
                  
                </CardBody>
                
              </CardContainer>
              
            ))}
        </div>
    </section>
  )
}

export default Projects