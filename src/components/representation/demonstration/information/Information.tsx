import React, { HTMLAttributes } from 'react'
import scss from './Information.module.scss'
import InformationText from './informationText/InformationText'
import Social from './social/Social'

interface PropsInformation extends HTMLAttributes<HTMLDivElement> {}

const Information: React.FC<PropsInformation> = () => {
	return (
		<div className={scss.information}>
			<InformationText />
			<Social />
		</div>
	)
}

export default Information
