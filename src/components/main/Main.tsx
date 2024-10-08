import React from 'react'
import sass from './Main.module.sass'
import About from '@components/about/About'
import Skills from '@components/skills/Skills'
import Portfolio from '@components/portfolio/Portfolio'

interface PropsMain {}

const Main: React.FC<PropsMain> = () => {
	return (
		<main className={sass.main}>
			<div className={sass.gradient}>
				<About />
				<Skills />
			</div>

			<Portfolio />
		</main>
	)
}

export default Main
