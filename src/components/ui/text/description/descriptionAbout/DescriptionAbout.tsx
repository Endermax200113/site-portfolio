import React from 'react'
import sass from './DescriptionAbout.module.sass'
import Description, { PropsDescription } from '../Description'

interface PropsDescriptionAbout extends PropsDescription {}

const DescriptionAbout: React.FC<PropsDescriptionAbout> = ({ children, ...props }) => {
	return (
		<Description className={sass.description} {...props}>
			{children}
		</Description>
	)
}

export default DescriptionAbout
