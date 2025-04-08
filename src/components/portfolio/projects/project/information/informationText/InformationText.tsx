import React, { HTMLAttributes } from 'react'
import sass from './InformationText.module.sass'
import HeadingProject from '@ui/text/heading/headingProject/HeadingProject'
import DescriptionProject from '@ui/text/description/descriptionProject/DescriptionProject'

interface PropsInformationText extends HTMLAttributes<HTMLDivElement> {
	name: string
	briefDescription: string
}

const InformationText: React.FC<PropsInformationText> = ({ name, briefDescription, ...props }) => {
	return (
		<div className={sass.text} {...props}>
			<HeadingProject children={name} />
			<DescriptionProject>{briefDescription}</DescriptionProject>
		</div>
	)
}

export default InformationText
