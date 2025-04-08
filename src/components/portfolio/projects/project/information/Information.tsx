import React, { HTMLAttributes } from 'react'
import sass from './Information.module.sass'
import InformationText from './informationText/InformationText'
import { PreviewProject } from '@helper/portfolio'
import Buttons from './buttons/Buttons'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsInformation extends HTMLAttributes<HTMLDivElement> {
	project: PreviewProject
}

const Information: React.FC<PropsInformation> = ({ className, project, ...props }) => {
	return (
		<div className={mergeAllClasses([sass.information], className)} {...props}>
			<InformationText name={project.name} briefDescription={project.briefDescription} />
			<Buttons idProject={project.id} site={project.site} />
		</div>
	)
}

export default Information
