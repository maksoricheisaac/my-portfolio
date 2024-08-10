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
    <section id="skills" className="my-10">
        <h2 className='text-2xl font-bold'>Mes compétences</h2>
        <div className="flex gap-4 flex-wrap mt-5">
            {skills.map((skill: Skill) => (
                <Button key={skill.id} text={skill.name} />
            ))}
        </div>
        
    </section>
  )
}

export default Skills