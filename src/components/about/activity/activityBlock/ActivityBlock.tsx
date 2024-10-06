import React from 'react'
import sass from './ActivityBlock.module.sass'
import Image from '@ui/image/Image'

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
			<p className={sass.description}>{children}</p>
		</div>
	)
}

export default ActivityBlock
