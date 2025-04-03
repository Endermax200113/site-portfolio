import React, { forwardRef } from 'react'
import sass from './Skills.module.sass'
import Heading from '@ui/text/heading/Heading'
import BlocksSkills from './blocksSkills/BlocksSkills'

interface PropsSkills {
	[props: string]: any
}

const Skills: React.FC<PropsSkills> = forwardRef<HTMLElement>(({ ...props }, forwardedRef) => {
	return (
		<section className={sass.skills} {...props} ref={forwardedRef}>
			<Heading children='Навыки' className={sass.heading} />
			<BlocksSkills />
		</section>
	)
})

export default Skills
