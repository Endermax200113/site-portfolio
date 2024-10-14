import React from 'react'
import sass from './Projects.module.sass'
import { AllProjects, Project } from '@helper/portfolio'
import Image from '@ui/image/Image'
import Description from '@ui/text/description/Description'
import Button from '@ui/button/Button'
import { ButtonContent } from '@utils/spotButton'

interface PropsProjects {
	projects: AllProjects
}

const Projects: React.FC<PropsProjects> = ({ projects }) => {
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
		<div className={sass.projects}>
			{projects.map((project: Project, i: number) => {
				return (
					<div className={sass.project} key={i}>
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
			})}
		</div>
	)
}

export default Projects
