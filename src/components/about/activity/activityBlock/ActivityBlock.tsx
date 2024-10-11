import React from 'react'
import sass from './ActivityBlock.module.sass'
import Image from '@ui/image/Image'
import Description from '@ui/text/description/Description'

interface PropsActivityBlock {
	urlImage: string
	title: string
	children: string
}

const ActivityBlock: React.FC<PropsActivityBlock> = ({ urlImage, title, children }) => {
	return (
		<div className={sass.block}>
			<Image url={urlImage} alt={title} classesWrap={sass.wrap} classesImage={sass.icon} />

			<h2 className={sass.title}>{title}</h2>
			<Description classes={sass.description}>{children}</Description>
		</div>
	)
}

export default ActivityBlock
