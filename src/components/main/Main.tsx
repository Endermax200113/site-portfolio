import React from 'react'
import sass from './Main.module.sass'
import About from '@components/about/About'
import Skills from '@components/skills/Skills'

interface PropsMain {}

const Main: React.FC<PropsMain> = () => {
	return (
		<main className={sass.main}>
			<div className={sass.gradient}>
				<About />
				<Skills />
			</div>
		</main>
	)
}

export default Main
