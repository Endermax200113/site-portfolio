import React from 'react'
import sass from './BlockOfSkills.module.sass'
import { FourSkills } from '@helper/skills'
import Label from '@ui/text/label/Label'
import Image from '@ui/image/Image'

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
					return (
						<div className={sass['skills-row']} key={i}>
							{fourSkills.map(([url, name], i) => {
								return (
									<div className={sass.skill} key={i}>
										<Image url={url} classesWrap={sass.wrap} alt={name} />
										<Label classes={sass.name}>{name}</Label>
									</div>
								)
							})}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default BlockOfSkills
