import React from 'react'
import sass from './Skill.module.sass'
import Label from '@ui/text/label/Label'
import Image from '@ui/image/Image'
import SVGImage from 'SVGImage'

interface PropsSkill {
	url: string | SVGImage
	name: string
}

const Skill: React.FC<PropsSkill> = ({ url, name }) => {
	// TODO Переделать семантическую вёрстку:
	// [ ] skill -> figure
	// [ ] name -> figcaption

	return (
		<div className={sass.skill}>
			<Image url={url} classWrap={sass.wrap} alt={name} />
			<Label className={sass.name}>{name}</Label>
		</div>
	)
}

export default Skill
