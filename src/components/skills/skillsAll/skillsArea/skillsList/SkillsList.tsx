import React, { HTMLAttributes } from 'react'
import sass from './SkillsList.module.sass'
import { AllSkills } from '@helper/skills'
import Skill from './skill/Skill'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsSkillsList extends HTMLAttributes<HTMLDivElement> {
	skills: AllSkills
	mergeClass?: boolean
}

const SkillsList: React.FC<PropsSkillsList> = ({ mergeClass, skills, className, ...props }) => {
	const classSkills: string = mergeAllClasses([mergeClass || !className ? sass.skills : ''], className)

	return (
		<div className={classSkills} {...props}>
			{skills.map(([img, name], i) => {
				return <Skill url={img} name={name} key={`skill-${new Date().getTime()}-${i}`} />
			})}
		</div>
	)
}

export default SkillsList
