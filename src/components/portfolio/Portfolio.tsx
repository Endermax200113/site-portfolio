import React, { forwardRef, RefAttributes, useEffect, useState } from 'react'
import sass from './Portfolio.module.sass'
import Image from '@ui/image/Image'
import Heading from '@ui/text/heading/Heading'
import { AllProjects } from '@helper/portfolio'
import Projects from './projects/Projects'
import Link from '@ui/link/Link'
import { dataPortfolio, DataPortfolio } from '@/data/portfolio'
import { useArray } from '@hooks/useArray'
import { useRenderEffect } from '@hooks/useRenderEffect'

interface PropsPortfolio extends RefAttributes<HTMLElement> {
	[props: string]: any
}

const Portfolio: React.FC<PropsPortfolio> = forwardRef<HTMLElement>(({ ...props }, forwardedRef) => {
	const [showMore, setShowMore] = useState<boolean>(false)

	const arrProjects: AllProjects = useArray(() => {
		const arr: AllProjects = []

		for (let i = 0; i < (dataPortfolio.length >= 6 ? 6 : dataPortfolio.length); i++) {
			arr.push(dataPortfolio[i])
		}

		return arr
	})

	useRenderEffect(() => {
		setShowMore(dataPortfolio.length > 6)
	}, [dataPortfolio.length])

	// const [prevProjectsCount, setPrevProjectsCount] = useState<number>(dataPortfolio.length)
	// if (prevProjectsCount !== dataPortfolio.length) {
	// 	setPrevProjectsCount(dataPortfolio.length)
	// 	setShowMore(dataPortfolio.length > 6)
	// }

	// useEffect(() => {
	// 	if (projects.length > 6) setShowMore(true)
	// 	else setShowMore(false)
	// }, [projects, setShowMore])

	return (
		<section className={sass.portfolio} {...props} ref={forwardedRef}>
			<div className={sass['image-heading']}>
				<Image url={require('@img/portfolio/heading.jpg')} classWrap={sass['image-wrap']} className={sass.image} />

				<Heading children='Портфолио' className={sass.heading} />
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
