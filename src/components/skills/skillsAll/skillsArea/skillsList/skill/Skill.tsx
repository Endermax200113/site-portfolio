import React from 'react'
import sass from './Skill.module.sass'
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

	return <Illustration className={sass.skill} image={url} classImage={sass.image} children={name} />
}

export default Skill
