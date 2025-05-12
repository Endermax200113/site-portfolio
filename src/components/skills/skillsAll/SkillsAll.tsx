import React, { HTMLAttributes } from 'react'
import scss from './SkillsAll.module.scss'
import SkillsArea from './skillsArea/SkillsArea'
import { dataSkillsBlock } from '@/data/skillsBlock'

interface PropsSkillsAll extends HTMLAttributes<HTMLDivElement> {}

const SkillsAll: React.FC<PropsSkillsAll> = ({ ...props }) => {
	return (
		<div
			className={scss.blocks}
			{...props}>
			{dataSkillsBlock.map(({ title, skills }, i) => {
				return (
					<SkillsArea
						name={title}
						skills={skills}
						key={`skills-area-main-${i}`}
					/>
				)
			})}
		</div>
	)
}

export default SkillsAll
