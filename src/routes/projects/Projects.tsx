import React from 'react'
import sass from './Projects.module.sass'
import { NavigateFunction, useLoaderData, useNavigate } from 'react-router-dom'
import { DataPortfolio } from '@/data/portfolio'
import Image from '@ui/image/Image'
import Button from '@ui/button/Button'
import Heading from '@ui/text/heading/Heading'
import Description from '@ui/text/description/Description'

interface PropsProjects {}

const Projects: React.FC<PropsProjects> = () => {
	const data = useLoaderData() as DataPortfolio[]
	const navigate: NavigateFunction = useNavigate()

	const onClickToSite = (site: string | undefined): void => {
		if (!site) return

		window.open(site, '_blank')
	}

	const onClickMore = (id: number): void => navigate(`/projects/${id}`)

	return (
		<main className={sass.main}>
			<section className={sass.projects}>
				{data.map((project, i) => {
					return (
						<div key={i} className={sass.project}>
							<Image url={project.urlImage} classesWrap={sass['project-img-wrap']} classesImage={sass['project-img']} />

							<div className={sass.info}>
								<div className={sass.details}>
									<Heading text={project.name} classes={sass.title} />
									<Description classes={sass.description}>{project.briefDescription}</Description>
								</div>

								<div className={sass.buttons}>
									{project.site && (
										<Button classes={sass.button} click={() => onClickToSite(project.site)}>
											К сайту
										</Button>
									)}

									<Button classes={sass.button} click={() => onClickMore(project.id)}>
										Подробнее
									</Button>
								</div>
							</div>
						</div>
					)
				})}
			</section>
		</main>
	)
}

export default Projects
