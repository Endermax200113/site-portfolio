import React from 'react'
import sass from './HeadingProject.module.sass'
import Heading, { PropsHeading } from '../Heading'

interface PropsHeadingProject extends PropsHeading {}

const HeadingProject: React.FC<PropsHeadingProject> = ({ children, ...props }) => {
	return (
		<Heading level='2' className={sass.heading} {...props}>
			{children}
		</Heading>
	)
}

export default HeadingProject
