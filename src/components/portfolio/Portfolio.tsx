import React, { useEffect, useState } from 'react'
import sass from './Portfolio.module.sass'
import Image from '@ui/image/Image'
import Heading from '@ui/text/heading/Heading'
import { AllProjects } from '@helper/portfolio'
import Projects from './projects/Projects'
import Link from '@ui/link/Link'

interface PropsPortfolio {}

const Portfolio: React.FC<PropsPortfolio> = () => {
	const [arrProjects, setArrProjects] = useState<AllProjects>([])
	const [showMore, setShowMore] = useState<boolean>(false)

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

		const newArr: AllProjects = []

		for (let i = 0; i < 6; i++) {
			newArr.push(arr[i])
		}

		setArrProjects(newArr)

		if (arr.length > 6) setShowMore(true)
		else setShowMore(false)
	}, [setArrProjects, setShowMore])

	return (
		<section id='portfolio' className={sass.portfolio}>
			<div className={sass['image-heading']}>
				<Image url={require('@img/portfolio/heading.jpg')} objectFit='cover' classesWrap={sass['image-wrap']} classesImage={sass.image} />

				<Heading text='Портфолио' classes={sass.heading} />
			</div>

			<Projects projects={arrProjects} />

			{showMore && (
				<div className={sass.more}>
					<Link link='#more' text='Показать все проекты' classes={sass.link} />
				</div>
			)}
		</section>
	)
}

export default Portfolio
