import React from 'react'
import { Navbar } from './Navbar'
import { Hero } from './Hero'



type Props = {}

const Header = (props: Props) => {
  return (
    <header id='home'>
        <Navbar />
        <Hero />
    </header>
  )
}

export default Header