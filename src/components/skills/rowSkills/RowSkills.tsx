import React from 'react'
import sass from './RowSkills.module.sass'
import Label from '@ui/text/label/Label'
import Image from '@ui/image/Image'
import { AllSkills } from '@helper/skills'

interface PropsRowSkills {
	rowSkills: AllSkills
}

const RowSkills: React.FC<PropsRowSkills> = ({ rowSkills }) => {
	return (
		<div className={sass['skills-row']}>
			{rowSkills.map(([url, name], i) => {
				return (
					<div className={sass.skill} key={i}>
						<Image url={url} classesWrap={sass.wrap} alt={name} />
						<Label classes={sass.name}>{name}</Label>
					</div>
				)
			})}
		</div>
	)
}

export default RowSkills
