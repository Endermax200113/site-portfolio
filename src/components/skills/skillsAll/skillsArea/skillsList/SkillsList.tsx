import React, { HTMLAttributes } from 'react'
import sass from './SkillsList.module.sass'
import { AllSkills } from '@helper/skills'
import Skill from './skill/Skill'

interface PropsSkillsList extends HTMLAttributes<HTMLDivElement> {
	skills: AllSkills
}

const SkillsList: React.FC<PropsSkillsList> = ({ skills, ...props }) => {
	return (
		<div className={sass.skills} {...props}>
			{skills.map(([img, name], i) => {
				return <Skill url={img} name={name} key={`skill-main-${i}`} />
			})}
		</div>
	)
}

export default SkillsList
