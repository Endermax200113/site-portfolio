import React, { HTMLAttributes } from 'react'
import sass from './Information.module.sass'
import InformationText from './informationText/InformationText'
import Social from './social/Social'

interface PropsInformation extends HTMLAttributes<HTMLDivElement> {}

const Information: React.FC<PropsInformation> = () => {
	return (
		<div className={sass.information}>
			<InformationText />
			<Social />
		</div>
	)
}

export default Information
