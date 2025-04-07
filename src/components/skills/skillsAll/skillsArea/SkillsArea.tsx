import React, { HTMLAttributes } from 'react'
import sass from './SkillsArea.module.sass'
import { AllSkills } from '@helper/skills'
import HeadingSkills from '@ui/text/heading/headingSkills/HeadingSkills'
import SkillsList from './skillsList/SkillsList'

interface PropsSkillsArea extends HTMLAttributes<HTMLDivElement> {
	name: string
	skills: AllSkills
}

const SkillsArea: React.FC<PropsSkillsArea> = ({ name, skills, ...props }) => {
	return (
		<div className={sass.block} {...props}>
			<HeadingSkills children={name} />
			<SkillsList skills={skills} />
		</div>
	)
}

export default SkillsArea
