import React, { forwardRef, RefAttributes, useState } from 'react'
import scss from './Portfolio.module.scss'
import { AllProjects } from '@helper/portfolio'
import Projects from './projects/Projects'
import { dataPortfolio } from '@/data/portfolio'
import { useArray } from '@hooks/useArray'
import { useRenderEffect } from '@hooks/useRenderEffect'
import Background from './background/Background'
import ProjectsMore from './projectsMore/ProjectsMore'

interface PropsPortfolio extends RefAttributes<HTMLElement> {}

const Portfolio: React.FC<PropsPortfolio> = forwardRef<HTMLElement>(({ ...props }, forwardedRef) => {
	const [showMore, setShowMore] = useState<boolean>(dataPortfolio.length > 6)

	const arrProjects: AllProjects = useArray(() => {
		const arr: AllProjects = []

		for (let i = 0; i < (dataPortfolio.length >= 6 ? 6 : dataPortfolio.length); i++) {
			arr.push(dataPortfolio[i])
		}

		return arr
	})

	useRenderEffect(() => setShowMore(dataPortfolio.length > 6), [dataPortfolio.length])

	return (
		<section
			className={scss.portfolio}
			{...props}
			ref={forwardedRef}>
			<Background />
			<Projects projects={arrProjects} />

			{showMore && <ProjectsMore />}
		</section>
	)
})

export default Portfolio
