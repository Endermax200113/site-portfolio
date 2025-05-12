import React, { HTMLAttributes } from 'react'
import scss from './InformationText.module.scss'
import HeadingProject from '@ui/text/heading/headingProject/HeadingProject'
import DescriptionProject from '@ui/text/description/descriptionProject/DescriptionProject'

interface PropsInformationText extends HTMLAttributes<HTMLDivElement> {
	name: string
	briefDescription: string
}

const InformationText: React.FC<PropsInformationText> = ({ name, briefDescription, ...props }) => {
	return (
		<div
			className={scss.text}
			{...props}>
			<HeadingProject children={name} />
			<DescriptionProject>{briefDescription}</DescriptionProject>
		</div>
	)
}

export default InformationText
