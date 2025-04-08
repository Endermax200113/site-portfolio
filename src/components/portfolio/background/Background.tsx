import React, { HTMLAttributes } from 'react'
import sass from './Background.module.sass'
import Image from '@ui/image/Image'
import Heading from '@ui/text/heading/Heading'

interface PropsBackground extends HTMLAttributes<HTMLDivElement> {}

const Background: React.FC<PropsBackground> = ({ ...props }) => {
	return (
		<div className={sass.background} {...props}>
			<Image url={require('@img/portfolio/heading.jpg')} classWrap={sass['image-wrap']} className={sass.image} />

			<Heading children='Портфолио' className={sass.heading} mergeClass />
		</div>
	)
}

export default Background
