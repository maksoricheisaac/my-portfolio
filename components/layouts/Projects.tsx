"use client"
import React from 'react'
import projects from '../../public/data/projects.json'

import img1 from '../../public/images/projects/project1.png'
import img2 from '../../public/images/projects/project2.png'
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from '../ui/3d-card'
import { link } from 'fs'
import Link from 'next/link'
import { Button } from '../ui/button'


type Project = {
    id: number,
    title: string,
    desc: string,
    link: string,

}

const imgs = [img1, img2]

const getImg = (id:number) => {
    const img = imgs[id - 1]
    return <Image alt="image"  src={img} width={250} height={250}  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"/>
}

type Props = {}

const Projects = (props: Props) => {
  return (
    <section id="projects" className='my-20'>
       <div className="space-y-2 flex flex-col items-center justify-center">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Mes Projets</div>
            <h2 className="text-2xl font-bold tracking-tighter ">Découvrez mes derniers travaux</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Je travaille sur une grande variété de projets, allant de simples sites Web à des applications Web complexes. Voici quelques-uns de mes préférés.</p>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-5 justify-center'>
            {projects.map((project: Project) => (
                <CardContainer key={project.id} className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
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
                  <div className="flex justify-between items-center mt-20">
                    
                    <Link
                      href={project.link}
                      
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
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