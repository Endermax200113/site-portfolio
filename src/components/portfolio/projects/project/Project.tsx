import React, { HTMLAttributes } from 'react'
import scss from './Project.module.scss'
import { PreviewProject } from '@helper/portfolio'
import Image from '@ui/image/Image'
import Information from './information/Information'

interface PropsProject extends HTMLAttributes<HTMLDivElement> {
	project: PreviewProject
}

const Project: React.FC<PropsProject> = ({ project }) => {
	return (
		<div className={scss.project}>
			<Image
				url={project.urlImage}
				alt={project.name}
				classWrap={scss['image-wrap']}
				className={scss.image}
			/>

			<Information
				project={project}
				className={scss.info}
			/>
		</div>
	)
}

export default Project
