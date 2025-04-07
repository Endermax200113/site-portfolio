import React from 'react'
import sass from './Skill.module.sass'
import Image from '@ui/image/Image'
import SVGImage from 'SVGImage'
import LabelSkill from '@ui/text/label/labelSkill/LabelSkill'

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
			<LabelSkill children={name} />
		</div>
	)
}

export default Skill
