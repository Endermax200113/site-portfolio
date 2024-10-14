import React from 'react'
import sass from './Project.module.sass'
import { OneProject } from '@helper/portfolio'
import { ButtonContent } from '@utils/spotButton'
import Image from '@ui/image/Image'
import Description from '@ui/text/description/Description'
import Button from '@ui/button/Button'

interface PropsProject {
	project: OneProject
}

const Project: React.FC<PropsProject> = ({ project }) => {
	const btnContentMore: ButtonContent = {
		type: 'small',
		img: '',
		text: 'Подробнее',
	}

	const btnContentSite: ButtonContent = {
		type: 'small',
		img: '',
		text: 'К сайту',
	}

	return (
		<div className={sass.project}>
			<Image url={project.urlImage} objectFit='cover' alt={project.name} classesWrap={sass['project-image-wrap']} classesImage={sass['project-image']} />

			<div className={sass.info}>
				<h2 className={sass.title}>{project.name}</h2>
				<Description classes={sass.description}>{project.description}</Description>

				<div className={sass.buttons}>
					{project.site !== undefined && <Button content={btnContentSite} classes={sass.button} />}
					<Button content={btnContentMore} classes={sass.button} />
				</div>
			</div>
		</div>
	)
}

export default Project
