import React, { forwardRef, RefAttributes } from 'react'
import sass from './Skills.module.sass'
import Heading from '@ui/text/heading/Heading'
import SkillsAll from './skillsAll/SkillsAll'

interface PropsSkills extends RefAttributes<HTMLElement> {
	[props: string]: any
}

const Skills: React.FC<PropsSkills> = forwardRef<HTMLElement>(({ ...props }, forwardedRef) => {
	return (
		<section className={sass.skills} {...props} ref={forwardedRef}>
			<Heading children='Навыки' />
			<SkillsAll />
		</section>
	)
})

export default Skills
