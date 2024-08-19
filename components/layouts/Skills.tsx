import React from 'react'
import { Button } from '../ui/button'
import skills from '../../public/data/skills.json'

type Props = {}
type Skill = {
    id: number,
    name: string
}

const Skills = (props: Props) => {
  return (
    <section id="skills" className="px-24 md:py-14  md:px-5 lg:px-24 my-20">
        <h2 className='text-4xl font-bold text-center'>My Skills</h2>
        <div className="flex items-center gap-4 flex-wrap  mt-5">
            {skills.map((skill: Skill) => (
                <Button key={skill.id} >
                  {skill.name}
                </Button>
            ))}
        </div>
        
    </section>
  )
}

export default Skills