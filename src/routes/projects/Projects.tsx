import React, { MouseEvent, useEffect, useState } from 'react'
import sass from './Projects.module.sass'
import { NavigateFunction, useLoaderData, useNavigate, useSearchParams } from 'react-router-dom'
import { dataPortfolio, DataPortfolio } from '@/data/portfolio'
import Image from '@ui/image/Image'
import Button from '@ui/button/Button'
import Heading from '@ui/text/heading/Heading'
import Description from '@ui/text/description/Description'
import { trimSass } from '@utils/sassControl'
import Pagination from '@components/pagination/Pagination'
import RootMain from '@components/main/Main'
import { useRenderEffect } from '@hooks/useRenderEffect'
import { copyObject } from '@utils/objectControl'

//
// TODO Исправить код в этом компоненте:
//
// [x] Удалить JSON с localStorage
// [x] Убрать useEffect или достичь до минимума
// [ ] Исправить дизайн
//

type Data = {
	pages: number
	page: number
	projects: DataPortfolio[][]
}

interface PropsProjects {}

const Projects: React.FC<PropsProjects> = () => {
	const data = useLoaderData() as Data
	const navigate: NavigateFunction = useNavigate()
	const [, setSearchParams] = useSearchParams()

	const [arrPagesData, setArrPagesData] = useState<DataPortfolio[][]>([])
	const [page, setPage] = useState<number>(data.page)

	const handleToSiteClick = (site?: string): void => {
		if (!site) return

		window.open(site, '_blank')
	}

	const handleMoreClick = (id: number): void => navigate(`/projects/${id}`)

	const setCurrentPage = (page: number, e?: MouseEvent): void => {
		if (e) {
			e.preventDefault()
		}

		setSearchParams(params => {
			params.set('page', `${page}`)
			return params
		})
		setPage(page)
	}

	useRenderEffect(
		() => {
			setPage(data.page)
			setArrPagesData(data.projects)
		},
		[],
		true
	)

	return (
		<RootMain className={sass.main}>
			<section className={sass.projects}>
				{arrPagesData && arrPagesData.length > 0 ? (
					arrPagesData[page - 1].map((project, i) => {
						return (
							<div key={i} className={sass.project}>
								<Image url={project.urlImage} classWrap={sass['project-img-wrap']} className={sass['project-img']} />

								<div className={sass.info}>
									<div className={sass.details}>
										<Heading children={project.name} className={sass.title} />
										<Description className={sass.description}>{project.briefDescription}</Description>
									</div>

									<div className={sass.buttons}>
										{project.site && (
											<Button className={sass.button} onClick={() => handleToSiteClick(project.site)}>
												К сайту
											</Button>
										)}

										<Button className={sass.button} onClick={() => handleMoreClick(project.id)}>
											Подробнее
										</Button>
									</div>
								</div>
							</div>
						)
					})
				) : (
					<div className={sass['no-projects']}>
						<Heading children='Нет проектов' className={trimSass(sass, ['no-projects', 'title'])} />
					</div>
				)}
			</section>

			{arrPagesData.length > 1 && <Pagination pages={arrPagesData.length} page={page} setPage={setCurrentPage} />}
		</RootMain>
	)
}

export default Projects
