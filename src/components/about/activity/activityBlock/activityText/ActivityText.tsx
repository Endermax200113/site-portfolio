import React, { HTMLAttributes } from 'react'
import sass from './ActivityText.module.sass'
import HeadingAboutActivity from '@ui/text/heading/headingAboutActivity/HeadingAboutActivity'
import DescriptionAboutActivity from '@ui/text/description/descriptionAboutActivity/DescriptionAboutActivity'

interface PropsActivityText extends HTMLAttributes<HTMLDivElement> {
	heading?: string
}

const ActivityText: React.FC<PropsActivityText> = ({ heading, children, ...props }) => {
	return (
		<div className={sass.text} {...props}>
			<HeadingAboutActivity children={heading} />
			<DescriptionAboutActivity children={children} />
		</div>
	)
}

export default ActivityText
