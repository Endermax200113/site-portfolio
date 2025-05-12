import React from 'react'
import scss from './DescriptionAboutActivity.module.scss'
import Description, { PropsDescription } from './../Description'

interface PropsDescriptionAboutActivity extends PropsDescription {}

const DescriptionAboutActivity: React.FC<PropsDescriptionAboutActivity> = ({ children, ...props }) => {
	return (
		<Description
			className={scss.description}
			{...props}>
			{children}
		</Description>
	)
}

export default DescriptionAboutActivity
