import React from 'react'
import sass from './About.module.sass'

interface PropsAbout {}

const About: React.FC<PropsAbout> = () => {
	return (
		<section className='about' id='about'>
			About
		</section>
	)
}

export default About
