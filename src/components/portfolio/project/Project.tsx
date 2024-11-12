import React from 'react'
import sass from './Project.module.sass'
import { PreviewProject } from '@helper/portfolio'
import Image from '@ui/image/Image'
import Description from '@ui/text/description/Description'
import Button from '@ui/button/Button'
import Heading from '@ui/text/heading/Heading'

interface PropsProject {
	project: PreviewProject
}

const Project: React.FC<PropsProject> = ({ project }) => {
	return (
		<div className={sass.project}>
			<Image url={project.urlImage} objectFit='cover' alt={project.name} classesWrap={sass['project-image-wrap']} classesImage={sass['project-image']} />

			<div className={sass.info}>
				<Heading level='2' classes={sass.title} text={project.name} />
				<Description classes={sass.description}>{project.briefDescription}</Description>

				<div className={sass.buttons}>
					{project.site && (
						<Button type='small' classes={sass.button}>
							К сайту
						</Button>
					)}

					<Button type='small' classes={sass.button}>
						Подробнее
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Project
