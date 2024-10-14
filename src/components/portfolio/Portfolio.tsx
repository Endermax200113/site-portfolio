import React, { useEffect, useState } from 'react'
import sass from './Portfolio.module.sass'
import Image from '@ui/image/Image'
import Heading from '@ui/text/heading/Heading'
import { AllProjects } from '@helper/portfolio'
import Projects from './projects/Projects'

interface PropsPortfolio {}

const Portfolio: React.FC<PropsPortfolio> = () => {
	const [arrProjects, setArrProjects] = useState<AllProjects>([])

	//TODO Заполнить все проекты

	useEffect(() => {
		const arr: AllProjects = []

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

			<Projects projects={arrProjects} />

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
