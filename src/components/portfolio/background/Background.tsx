import React, { HTMLAttributes } from 'react'
import scss from './Background.module.scss'
import Image from '@ui/image/Image'
import Heading from '@ui/text/heading/Heading'

const imgHeading: string = (await import('@img/portfolio/heading.jpg')).default

interface PropsBackground extends HTMLAttributes<HTMLDivElement> {}

const Background: React.FC<PropsBackground> = ({ ...props }) => {
	return (
		<div
			className={scss.background}
			{...props}>
			<Image
				url={imgHeading}
				classWrap={scss['image-wrap']}
				className={scss.image}
			/>

			<Heading
				children='Портфолио'
				className={scss.heading}
				mergeClass
			/>
		</div>
	)
}

export default Background
