import React from 'react'
import sass from './Skills.module.sass'
import Heading from '@ui/text/heading/Heading'
import BlocksSkills from './blocksSkills/BlocksSkills'

interface PropsSkills {}

const Skills: React.FC<PropsSkills> = () => {
	return (
		<section id='skills' className={sass.skills}>
			<Heading text='Навыки' classes={sass.heading} />
			<BlocksSkills />
		</section>
	)
}

export default Skills
