import React, { forwardRef, RefAttributes } from 'react'
import scss from './Skills.module.scss'
import Heading from '@ui/text/heading/Heading'
import SkillsAll from './skillsAll/SkillsAll'

interface PropsSkills extends RefAttributes<HTMLElement> {}

const Skills: React.FC<PropsSkills> = forwardRef<HTMLElement>(({ ...props }, forwardedRef) => {
	return (
		<section
			className={scss.skills}
			{...props}
			ref={forwardedRef}>
			<Heading children='Навыки' />
			<SkillsAll />
		</section>
	)
})

export default Skills
