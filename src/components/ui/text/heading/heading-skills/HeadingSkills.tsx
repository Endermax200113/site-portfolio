import React from 'react'
import scss from './HeadingSkills.module.scss'
import Heading, { PropsHeading } from '../Heading'

interface PropsHeadingSkills extends PropsHeading {}

const HeadingSkills: React.FC<PropsHeadingSkills> = ({ children, ...props }) => {
	return (
		<Heading
			level='2'
			className={scss.heading}
			{...props}>
			{children}
		</Heading>
	)
}

export default HeadingSkills
