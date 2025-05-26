import React from 'react'
import scss from './DescriptionAbout.module.scss'
import Description, { PropsDescription } from '../Description'

interface PropsDescriptionAbout extends PropsDescription {}

const DescriptionAbout: React.FC<PropsDescriptionAbout> = ({ children, ...props }) => {
	return (
		<Description
			className={scss.description}
			{...props}>
			{children}
		</Description>
	)
}

export default DescriptionAbout
