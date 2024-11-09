import React from 'react'
import sass from './Main.module.sass'
import About from '@components/about/About'
import Skills from '@components/skills/Skills'
import Portfolio from '@components/portfolio/Portfolio'
import Resume from '@components/resume/Resume'

interface PropsMain {}

const Main: React.FC<PropsMain> = () => {
	return (
		<main className={sass.main}>
			<div className={sass.gradient}>
				<About />
				<Skills />
			</div>

			<Portfolio />
			<Resume />
		</main>
	)
}

export default Main
