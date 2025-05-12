import React from 'react'
import scss from './DescriptionProject.module.scss'
import Description, { PropsDescription } from '../Description'

interface PropsDescriptionProject extends PropsDescription {}

const DescriptionProject: React.FC<PropsDescriptionProject> = ({ children, ...props }) => {
	return (
		<Description
			className={scss.description}
			{...props}>
			{children}
		</Description>
	)
}

export default DescriptionProject
