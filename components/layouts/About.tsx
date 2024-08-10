import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <section id="about" className="my-10">
        <h2 className="text-2xl font-bold">A propos de moi</h2>
        <p className='mt-5'>
        Bonjour ! Je suis un <span className='font-bold'>développeur web fullstack junior </span> passionné par la création de solutions numériques innovantes. Avec une expertise solide dans une gamme variée de technologies, je suis prêt à relever les défis les plus passionnants.
        </p>
    </section>
  )
}

export default About