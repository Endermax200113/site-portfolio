import React from 'react'
import scss from './HeadingProject.module.scss'
import Heading, { PropsHeading } from '../Heading'

interface PropsHeadingProject extends PropsHeading {}

const HeadingProject: React.FC<PropsHeadingProject> = ({ children, ...props }) => {
	return (
		<Heading
			level='2'
			className={scss.heading}
			{...props}>
			{children}
		</Heading>
	)
}

export default HeadingProject
