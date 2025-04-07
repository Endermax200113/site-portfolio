import React from 'react'
import sass from './RowSkills.module.sass'
import { AllSkills } from '@helper/skills'
import Skill from './../skillsAll/skillsArea/skillsList/skill/Skill'

interface PropsRowSkills {
	rowSkills: AllSkills
}

const RowSkills: React.FC<PropsRowSkills> = ({ rowSkills }) => {
	return (
		<div className={sass['skills-row']}>
			{rowSkills.map(([url, name], i) => {
				return <Skill url={url} name={name} key={i} />
			})}
		</div>
	)
}

export default RowSkills
