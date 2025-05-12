import React, { HTMLAttributes } from 'react'
import scss from './SkillsArea.module.scss'
import { AllSkills } from '@helper/skills'
import HeadingSkills from '@ui/text/heading/headingSkills/HeadingSkills'
import SkillsList from './skillsList/SkillsList'

interface PropsSkillsArea extends HTMLAttributes<HTMLDivElement> {
	name: string
	skills: AllSkills
}

const SkillsArea: React.FC<PropsSkillsArea> = ({ name, skills, ...props }) => {
	return (
		<div
			className={scss.block}
			{...props}>
			<HeadingSkills children={name} />
			<SkillsList skills={skills} />
		</div>
	)
}

export default SkillsArea
