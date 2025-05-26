import React, { HTMLAttributes } from 'react'
import scss from './ActivityBlock.module.scss'
import Image from '@ui/image/Image'
import ActivityText from './activity-text/ActivityText'

interface PropsActivityBlock extends HTMLAttributes<HTMLDivElement> {
	urlImage: string
	heading: string
}

const ActivityBlock: React.FC<PropsActivityBlock> = ({ urlImage, heading, children, ...props }) => {
	return (
		<div
			className={scss.block}
			{...props}>
			<Image
				url={urlImage}
				alt={heading}
				classWrap={scss.wrap}
				className={scss.icon}
			/>
			<ActivityText
				children={children}
				heading={heading}
			/>
		</div>
	)
}

export default ActivityBlock
