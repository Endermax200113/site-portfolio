import React, { useEffect, useState } from 'react'
import sass from './Portfolio.module.sass'
import Image from '@ui/image/Image'
import Heading from '@ui/text/heading/Heading'
import Description from '@ui/text/description/Description'
import Button from '@ui/button/Button'
import { ButtonContent } from '@utils/spotButton'

interface PropsPortfolio {}

type Project = {
	urlImage: string
	name: string
	description: string
	details: string
	site?: string
}

type Projects = Project[]

const Portfolio: React.FC<PropsPortfolio> = () => {
	const [arrProjects, setArrProjects] = useState<Projects>([])

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

	const test = HTMLDivElement

	useEffect(() => {
		const arr: Projects = []

		arr.push({
			urlImage: require('@img/portfolio/heading.jpg'),
			name: 'Test 1',
			description: 'Тестовый проект',
			details: 'url',
		})

		arr.push({
			urlImage: require('@img/portfolio/heading.jpg'),
			name: 'Test 1',
			description: 'Тестовый проект',
			details: 'url',
			site: 'https://www.example.com/index.php',
		})

		arr.reverse()

		setArrProjects(arr)
	}, [setArrProjects])

	return (
		<section id='portfolio' className={sass.portfolio}>
			<div className={sass['image-heading']}>
				<Image url={require('@img/portfolio/heading.jpg')} objectFit='cover' classesWrap={sass['image-wrap']} classesImage={sass.image} />

				<Heading text='Портфолио' classes={sass.heading} />
			</div>

			<div className={sass.projects}>
				{arrProjects.map((project: Project, i: number) => {
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
			{arrProjects.length > 6 && (
				<div className={sass.more}>
					<a href='#more' className={sass.link}>
						Показать все проекты
					</a>
				</div>
			)}
		</section>
	)
}

export default Portfolio
