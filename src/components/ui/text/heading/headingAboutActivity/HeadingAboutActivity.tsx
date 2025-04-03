import React from 'react'
import sass from './HeadingAboutActivity.module.sass'
import Heading, { PropsHeading } from '../Heading'

interface PropsHeadingAboutActivity extends PropsHeading {}

const HeadingAboutActivity: React.FC<PropsHeadingAboutActivity> = ({ children, ...props }) => {
	return (
		<Heading className={sass.heading} level='2' {...props}>
			{children}
		</Heading>
	)
}

export default HeadingAboutActivity
