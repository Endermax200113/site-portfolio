import React, { forwardRef, RefAttributes, useState } from 'react'
import sass from './Portfolio.module.sass'
import { AllProjects } from '@helper/portfolio'
import Projects from './projects/Projects'
import Link from '@ui/link/Link'
import { dataPortfolio } from '@/data/portfolio'
import { useArray } from '@hooks/useArray'
import { useRenderEffect } from '@hooks/useRenderEffect'
import Background from './background/Background'

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

	useRenderEffect(() => setShowMore(dataPortfolio.length > 6), [dataPortfolio.length])

	return (
		<section className={sass.portfolio} {...props} ref={forwardedRef}>
			<Background />
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
