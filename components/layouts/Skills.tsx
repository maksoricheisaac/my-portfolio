import React from 'react'
import { Button } from '../ui/button'
import skills from '../../data/skills.json'

type Props = {}
type Skill = {
    id: number,
    name: string
}

const Skills = (props: Props) => {
  return (
    <section id="skills" className="px-24 md:py-14  md:px-5 lg:px-24 my-20">
        <h2 className='text-4xl font-bold dark:text-primary text-center' data-aos="fade-left">My Skills</h2>
        <div className="flex items-center gap-4 flex-wrap  mt-5">
            {skills.map((skill: Skill) => (
                <Button data-aos="fade-right" key={skill.id} >
                  {skill.name}
                </Button>
            ))}
        </div>
        
    </section>
  )
}

export default Skills