import React, { HTMLAttributes } from 'react'
import sass from './Project.module.sass'
import { PreviewProject } from '@helper/portfolio'
import Image from '@ui/image/Image'
import Information from './information/Information'

interface PropsProject extends HTMLAttributes<HTMLDivElement> {
	project: PreviewProject
}

const Project: React.FC<PropsProject> = ({ project }) => {
	return (
		<div className={sass.project}>
			<Image url={project.urlImage} alt={project.name} classWrap={sass['image-wrap']} className={sass.image} />

			<Information project={project} className={sass.info} />
		</div>
	)
}

export default Project
