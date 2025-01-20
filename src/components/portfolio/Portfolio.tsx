import React, { forwardRef, useEffect, useState } from 'react'
import sass from './Portfolio.module.sass'
import Image from '@ui/image/Image'
import Heading from '@ui/text/heading/Heading'
import { AllProjects } from '@helper/portfolio'
import Projects from './projects/Projects'
import Link from '@ui/link/Link'
import { dataPortfolio, DataPortfolio } from '@/data/portfolio'
import { useArray } from '@hooks/useArray'

interface PropsPortfolio {
	[props: string]: any
}

const Portfolio: React.FC<PropsPortfolio> = forwardRef<HTMLElement>(({ ...props }, forwardedRef) => {
	const projects: DataPortfolio[] = useArray<DataPortfolio>(() => dataPortfolio)
	const [arrProjects, setArrProjects] = useState<AllProjects>([])
	const [showMore, setShowMore] = useState<boolean>(false)

	useEffect(() => {
		const newArr: AllProjects = []

		for (let i = 0; i < (projects.length >= 6 ? 6 : projects.length); i++) {
			newArr.push(projects[i])
		}

		setArrProjects(newArr)

		if (projects.length > 6) setShowMore(true)
		else setShowMore(false)
	}, [projects, setShowMore, setArrProjects])

	return (
		<section className={sass.portfolio} {...props} ref={forwardedRef}>
			<div className={sass['image-heading']}>
				<Image url={require('@img/portfolio/heading.jpg')} classesWrap={sass['image-wrap']} classesImage={sass.image} />

				<Heading text='Портфолио' classes={sass.heading} />
			</div>

			<Projects projects={arrProjects} />

			{showMore && (
				<div className={sass.more}>
					<Link link='/projects' text='Показать все проекты' classes={sass.link} />
				</div>
			)}
		</section>
	)
})

export default Portfolio
