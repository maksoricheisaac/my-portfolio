import React from 'react'
import { FloatingNav } from '../ui/floating-navbar'
import { Hero } from './Hero'


const navItems = [
    {
        name: "Acceuil",
        link: "home"
    },
    {
      name: "A propos",
      link: "#about"
  },
 
  {
    name: "Compétences",
    link: "#skills"
  },
  {
    name: "Projets",
    link: "#projects"
  },
  {
    name: "Contact",
    link: "#contact"
  }
  ]
type Props = {}

const Header = (props: Props) => {
  return (
    <header id='home'>
        <FloatingNav navItems={navItems} />
        <Hero />
    </header>
  )
}

export default Header