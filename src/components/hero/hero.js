import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { hero, heroImage } from './hero.module.scss'

const Hero = () => {
  // const { children } = props;

  return (
    <div className={ hero }>
      <StaticImage className={ heroImage } src="../../images/will_paige_software_engineer.png" alt="Will Paige Software Engineer" placeholder="blurred" />
    </div>
  )
}

export default Hero
