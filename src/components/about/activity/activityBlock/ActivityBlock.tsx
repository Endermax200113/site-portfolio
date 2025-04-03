import React from 'react'
import sass from './ActivityBlock.module.sass'
import Image from '@ui/image/Image'
import Description from '@ui/text/description/Description'
import Heading from '@ui/text/heading/Heading'

interface PropsActivityBlock {
	urlImage: string
	title: string
	children: string
}

const ActivityBlock: React.FC<PropsActivityBlock> = ({ urlImage, title, children }) => {
	return (
		<div className={sass.block}>
			<Image url={urlImage} alt={title} classWrap={sass.wrap} className={sass.icon} />
			<Heading level='2' className={sass.title} children={title} />
			<Description className={sass.description}>{children}</Description>
		</div>
	)
}

export default ActivityBlock
