import React from 'react'
import scss from './HeadingAboutActivity.module.scss'
import Heading, { PropsHeading } from '../Heading'

interface PropsHeadingAboutActivity extends PropsHeading {}

const HeadingAboutActivity: React.FC<PropsHeadingAboutActivity> = ({ children, ...props }) => {
	return (
		<Heading
			className={scss.heading}
			level='2'
			{...props}>
			{children}
		</Heading>
	)
}

export default HeadingAboutActivity
