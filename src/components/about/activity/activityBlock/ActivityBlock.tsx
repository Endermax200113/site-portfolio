import React from 'react'
import sass from './ActivityBlock.module.sass'

interface PropsActivityBlock {
	urlImage: string
	title: string
	children: string
}

const ActivityBlock: React.FC<PropsActivityBlock> = ({ urlImage, title, children }) => {
	return (
		<div className={sass.block}>
			<div className={sass.wrap}>
				<img src={urlImage} alt={title} className={sass.icon} />
			</div>

			<h2 className={sass.title}>{title}</h2>
			<p className={sass.description}>{children}</p>
		</div>
	)
}

export default ActivityBlock
