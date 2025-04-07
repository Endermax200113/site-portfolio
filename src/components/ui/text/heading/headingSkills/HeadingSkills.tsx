import React from 'react'
import sass from './HeadingSkills.module.sass'
import Heading, { PropsHeading } from '../Heading'

interface PropsHeadingSkills extends PropsHeading {}

const HeadingSkills: React.FC<PropsHeadingSkills> = ({ children, ...props }) => {
	return (
		<Heading level='2' className={sass.heading} {...props}>
			{children}
		</Heading>
	)
}

export default HeadingSkills
