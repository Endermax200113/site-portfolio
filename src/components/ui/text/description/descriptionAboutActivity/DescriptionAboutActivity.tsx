import React from 'react'
import sass from './DescriptionAboutActivity.module.sass'
import Description, { PropsDescription } from '../Description'

interface PropsDescriptionAboutActivity extends PropsDescription {}

const DescriptionAboutActivity: React.FC<PropsDescriptionAboutActivity> = ({ children, ...props }) => {
	return (
		<Description className={sass.description} {...props}>
			{children}
		</Description>
	)
}

export default DescriptionAboutActivity
