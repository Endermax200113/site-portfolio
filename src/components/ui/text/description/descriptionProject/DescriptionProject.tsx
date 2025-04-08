import React from 'react'
import sass from './DescriptionProject.module.sass'
import Description, { PropsDescription } from '../Description'

interface PropsDescriptionProject extends PropsDescription {}

const DescriptionProject: React.FC<PropsDescriptionProject> = ({ children, ...props }) => {
	return (
		<Description className={sass.description} {...props}>
			{children}
		</Description>
	)
}

export default DescriptionProject
