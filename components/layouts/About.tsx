import React from 'react'
import aboutme from '../../public/images/aboutme.png'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <section id="about" className="px-24 my-20 md:px-5 lg:px-24 md:my-10 md:py-16 ">
        <h2 className="text-4xl font-bold text-center" >About me</h2>
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center md:justify-between">
          <Image src={aboutme} width={250} height={250} alt="About Me" />
          <div>
            <p className='my-2'>Hello! I am a junior fullstack web developer with a deep passion for crafting innovative digital solutions that make a difference. My expertise spans a wide array of technologies, including React, Next.js, Node.js, PHP, and various databases like MySQL and MongoDB. I thrive on transforming complex problems into elegant, user-friendly applications and enjoy leveraging my skills in both frontend and backend development to create seamless, high-performing digital experiences.</p>
            <p className='my-2'>Committed to continuous learning, I stay updated on industry trends and best practices. Eager to tackle challenges, I bring technical expertise and creative problem-solving to projects, whether independently or in teams, delivering solutions that exceed client expectations and push digital boundaries.</p>
            <p className='my-2'>Connect and explore how I can turn your next project into a reality with innovative and effective web solutions!</p>
          </div>
        </div>
        
        
       
    </section>
  )
}

export default About