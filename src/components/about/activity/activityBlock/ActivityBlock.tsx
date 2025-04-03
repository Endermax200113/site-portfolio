import React, { HTMLAttributes } from 'react'
import sass from './ActivityBlock.module.sass'
import Image from '@ui/image/Image'
import ActivityText from './activityText/ActivityText'

interface PropsActivityBlock extends HTMLAttributes<HTMLDivElement> {
	urlImage: string
	heading: string
}

const ActivityBlock: React.FC<PropsActivityBlock> = ({ urlImage, heading, children, ...props }) => {
	return (
		<div className={sass.block} {...props}>
			<Image url={urlImage} alt={heading} classWrap={sass.wrap} className={sass.icon} />
			<ActivityText children={children} heading={heading} />
		</div>
	)
}

export default ActivityBlock
