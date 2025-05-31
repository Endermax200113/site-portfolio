import React, { MouseEvent, useState } from 'react'
import scss from './Projects.module.scss'
import { NavigateFunction, useLoaderData, useNavigate, useSearchParams } from 'react-router-dom'
import { DataPortfolio } from '@/data/portfolio'
import Image from '@ui/image/Image'
import Button from '@ui/button/Button'
import Heading from '@ui/text/heading/Heading'
import Description from '@ui/text/description/Description'
import { trimSass } from '@utils/sassControl'
import Pagination from '@components/pagination/Pagination'
import RootMain, { PropsRootMain } from '@components/main/Main'
import { useRenderEffect } from '@hooks/useRenderEffect'

//
// DONE Исправить код в этом компоненте:
//
// [x] Удалить JSON с localStorage
// [x] Убрать useEffect или достичь до минимума
// [x] Исправить дизайн
//

type Data = {
	pages: number
	page: number
	projects: DataPortfolio[][]
}

interface PropsProjects extends PropsRootMain {}

const Projects: React.FC<PropsProjects> = ({ ...props }) => {
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
		<RootMain
			className={scss.main}
			{...props}>
			<section className={scss.projects}>
				{arrPagesData && arrPagesData.length > 0 ? (
					arrPagesData[page - 1].map((project, i) => {
						return (
							<div
								key={i}
								className={scss.project}>
								<Image
									url={project.urlImage}
									classWrap={scss['project-img-wrap']}
									className={scss['project-img']}
								/>

								<div className={scss.info}>
									<div className={scss.details}>
										<Heading
											children={project.name}
											className={scss.title}
										/>
										<Description className={scss.description}>{project.briefDescription}</Description>
									</div>

									<div className={scss.buttons}>
										{project.site && (
											<Button
												className={scss.button}
												onClick={() => handleToSiteClick(project.site)}>
												К сайту
											</Button>
										)}

										<Button
											className={scss.button}
											onClick={() => handleMoreClick(project.id)}>
											Подробнее
										</Button>
									</div>
								</div>
							</div>
						)
					})
				) : (
					<div className={scss['no-projects']}>
						<Heading
							children='Нет проектов'
							className={trimSass(scss, ['no-projects', 'title'])}
						/>
					</div>
				)}
			</section>

			{
				/* arrPagesData.length > 1 */ true && (
					<Pagination
						pages={/* arrPagesData.length */ 15}
						page={/* page */ 7}
						setPage={setCurrentPage}
					/>
				)
			}
		</RootMain>
	)
}

export default Projects
