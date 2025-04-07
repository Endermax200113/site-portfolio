import React, { HTMLAttributes } from 'react'
import sass from './SkillsAll.module.sass'
import SkillsArea from './skillsArea/SkillsArea'
import { dataSkillsBlock } from '@/data/skillsBlock'

interface PropsSkillsAll extends HTMLAttributes<HTMLDivElement> {}

const SkillsAll: React.FC<PropsSkillsAll> = ({ ...props }) => {
	return (
		<div className={sass.blocks} {...props}>
			{dataSkillsBlock.map(({ title, skills }, i) => {
				return <SkillsArea name={title} skills={skills} key={`skills-area-main-${i}`} />
			})}
		</div>
	)
}

export default SkillsAll
