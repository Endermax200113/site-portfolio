import React from 'react'
import sass from './DescriptionResume.module.sass'
import Description, { PropsDescription } from '../Description'

interface PropsDescriptionResume extends PropsDescription {}

const DescriptionResume: React.FC<PropsDescriptionResume> = ({ children, ...props }) => {
	return (
		<Description className={sass.description} {...props}>
			{children}
		</Description>
	)
}

export default DescriptionResume
