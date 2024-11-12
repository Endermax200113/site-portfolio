import React from 'react'
import sass from './BlockOfSkills.module.sass'
import { FourSkills } from '@helper/skills'
import RowSkills from './../rowSkills/RowSkills'
import Heading from '@ui/text/heading/Heading'

interface PropsBlockOfSkills {
	name: string
	arrFourSkills: FourSkills
}

const BlockOfSkills: React.FC<PropsBlockOfSkills> = ({ name, arrFourSkills }) => {
	return (
		<div className={sass.block}>
			<Heading level='2' classes={sass.title} text={name} />

			<div className={sass['skills-block']}>
				{arrFourSkills.map((fourSkills, i) => {
					return <RowSkills rowSkills={fourSkills} key={i} />
				})}
			</div>
		</div>
	)
}

export default BlockOfSkills
