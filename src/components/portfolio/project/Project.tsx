import React from 'react'
import sass from './Project.module.sass'
import { PreviewProject } from '@helper/portfolio'
import Image from '@ui/image/Image'
import Description from '@ui/text/description/Description'
import Button from '@ui/button/Button'
import Heading from '@ui/text/heading/Heading'
import { NavigateFunction, useNavigate } from 'react-router-dom'

interface PropsProject {
	project: PreviewProject
}

const Project: React.FC<PropsProject> = ({ project }) => {
	const navigate: NavigateFunction = useNavigate()

	const onClickSite = (): void => {
		if (!project.site) return

		window.open(project.site, '_blank')
	}

	const onClickMore = (): void => navigate(`/projects/${project.id}`)

	return (
		<div className={sass.project}>
			<Image url={project.urlImage} alt={project.name} classesWrap={sass['project-image-wrap']} classesImage={sass['project-image']} />

			<div className={sass.info}>
				<Heading level='2' classes={sass.title} text={project.name} />
				<Description classes={sass.description}>{project.briefDescription}</Description>

				<div className={sass.buttons}>
					{project.site && (
						<Button classes={sass.button} click={onClickSite}>
							К сайту
						</Button>
					)}

					<Button classes={sass.button} click={onClickMore}>
						Подробнее
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Project
