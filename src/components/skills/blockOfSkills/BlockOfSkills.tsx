import React from 'react'
import sass from './BlockOfSkills.module.sass'
import { FourSkills } from '@helper/skills'
import RowSkills from './../rowSkills/RowSkills'

interface PropsBlockOfSkills {
	name: string
	arrFourSkills: FourSkills
}

const BlockOfSkills: React.FC<PropsBlockOfSkills> = ({ name, arrFourSkills }) => {
	return (
		<div className={sass.block}>
			<div className={sass.title}>{name}</div>

			<div className={sass['skills-block']}>
				{arrFourSkills.map((fourSkills, i) => {
					return <RowSkills rowSkills={fourSkills} key={i} />
				})}
			</div>
		</div>
	)
}

export default BlockOfSkills
