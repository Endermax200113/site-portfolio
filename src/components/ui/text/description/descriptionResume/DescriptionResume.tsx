import React from 'react'
import scss from './DescriptionResume.module.scss'
import Description, { PropsDescription } from '../Description'

interface PropsDescriptionResume extends PropsDescription {}

const DescriptionResume: React.FC<PropsDescriptionResume> = ({ children, ...props }) => {
	return (
		<Description
			className={scss.description}
			{...props}>
			{children}
		</Description>
	)
}

export default DescriptionResume
