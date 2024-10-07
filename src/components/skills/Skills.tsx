import React from 'react'
import sass from './Skills.module.sass'
import Headline from '@ui/text/headline/Headline'
import BlocksSkills from './blocksSkills/BlocksSkills'

interface PropsSkills {}

const Skills: React.FC<PropsSkills> = () => {
	return (
		<section id='skills' className={sass.skills}>
			<Headline text='Навыки' classes={sass.headline} />
			<BlocksSkills />
		</section>
	)
}

export default Skills
