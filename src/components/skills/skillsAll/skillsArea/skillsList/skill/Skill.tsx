import React from 'react'
import scss from './Skill.module.scss'
import SVGImage from 'SVGImage'
import Illustration from '@ui/illustration/Illustration'

interface PropsSkill {
	url: string | SVGImage
	name: string
}

const Skill: React.FC<PropsSkill> = ({ url, name }) => {
	// DONE Переделать семантическую вёрстку:
	// [x] skill -> figure
	// [x] name -> figcaption

	return (
		<Illustration
			className={scss.skill}
			image={url}
			classImage={scss.image}
			children={name}
		/>
	)
}

export default Skill
