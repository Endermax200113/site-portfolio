import React, { forwardRef, RefAttributes, useState } from 'react'
import scss from './Portfolio.module.scss'
import { AllProjects } from '@helper/portfolio'
import Projects from './projects/Projects'
import { dataPortfolio } from '@/data/portfolio'
import { useArray } from '@hooks/useArray'
import { useRenderEffect } from '@hooks/useRenderEffect'
import Background from './background/Background'
import ProjectsMore from './projects-more/ProjectsMore'
import { getRemByPx, getWidthScreen } from '@utils/screenControl'
import { useEventListener } from '@hooks/useEventListener'

interface PropsPortfolio extends RefAttributes<HTMLElement> {}

const Portfolio: React.FC<PropsPortfolio> = forwardRef<HTMLElement>(({ ...props }, forwardedRef) => {
	const checkCount = (): number => {
		if (getWidthScreen() >= getRemByPx(3500)) {
			return 6
		} else if (getWidthScreen() >= getRemByPx(3000)) {
			return 5
		} else if (getWidthScreen() >= getRemByPx(2300)) {
			return 8
		}

		return 6
	}

	// TODO Не забыть убрать true!
	const [countForChecking, setCountForChecking] = useState<number>(checkCount())
	const [showMore, setShowMore] = useState<boolean>(/* dataPortfolio.length > countForChecking */ true)

	const arrProjects: AllProjects = useArray(() => {
		const arr: AllProjects = []

		for (let i = 0; i < (dataPortfolio.length >= countForChecking ? countForChecking : dataPortfolio.length); i++) {
			arr.push(dataPortfolio[i])
		}

		return arr
	})

	const onResizeWidth = (): void => {
		if (getWidthScreen() >= getRemByPx(3500)) {
			if (countForChecking !== 6) setCountForChecking(6)
		} else if (getWidthScreen() >= getRemByPx(3000)) {
			if (countForChecking !== 5) setCountForChecking(5)
		} else if (getWidthScreen() >= getRemByPx(2300)) {
			if (countForChecking !== 8) setCountForChecking(8)
		} else {
			if (countForChecking !== 6) setCountForChecking(6)
		}
	}

	useEventListener('resize', onResizeWidth, true)

	useRenderEffect(
		() => setShowMore(/* dataPortfolio.length > countForChecking */ true),
		[
			/* dataPortfolio.length, countForChecking */
		]
	)

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
