import React, { MouseEvent, useEffect, useState } from 'react'
import sass from './Projects.module.sass'
import { NavigateFunction, useLoaderData, useNavigate, useSearchParams } from 'react-router-dom'
import { DataPortfolio } from '@/data/portfolio'
import Image from '@ui/image/Image'
import Button from '@ui/button/Button'
import Heading from '@ui/text/heading/Heading'
import Description from '@ui/text/description/Description'
import { trimSass } from '@utils/sassControl'
import Pagination from '@components/pagination/Pagination'

interface PropsProjects {}

const Projects: React.FC<PropsProjects> = () => {
	const data = useLoaderData() as DataPortfolio[]
	const navigate: NavigateFunction = useNavigate()
	const [searchParams, setSearchParams] = useSearchParams()

	const [arrPagesData, setArrPagesData] = useState<DataPortfolio[][]>([])
	const [page, setPage] = useState<number>(Number(searchParams.get('page') || 1))
	const [jsonData, setJsonData] = useState<string>()

	const onClickToSite = (site?: string): void => {
		if (!site) return

		window.open(site, '_blank')
	}

	const onClickMore = (id: number): void => navigate(`/projects/${id}`)

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

	useEffect(() => {
		const jsonData: string | null = localStorage.getItem('projects')

		if (jsonData) {
			const strJsonData: string = JSON.stringify(data)

			if (jsonData !== strJsonData) {
				setJsonData(strJsonData)
				localStorage.setItem('projects', strJsonData)
			}
		}
	}, [data])

	useEffect(() => {
		if (JSON.stringify(data) !== jsonData) {
			const arrData: DataPortfolio[] = []
			const count: number = 32

			for (let i = 0; i < count; i++) {
				data.forEach(thisData => arrData.push(thisData))
			}

			const countProjects: number = arrData.length
			const pages: number = countProjects / 10 + (countProjects % 10 !== 0 ? 1 : 0)

			const arrPages: DataPortfolio[][] = []

			i: for (let i = 0; i < pages; i++) {
				arrPages.push([])

				for (let j = i * 10; j < i * 10 + 10; j++) {
					if (!arrData[j]) break i

					arrPages[i].push(arrData[j])
				}
			}

			const strJsonData: string = JSON.stringify(data)

			localStorage.setItem('projects', strJsonData)

			setJsonData(strJsonData)
			setArrPagesData(arrPages)
		}
	}, [data, jsonData])

	return (
		<main className={sass.main}>
			<section className={sass.projects}>
				{arrPagesData && arrPagesData.length > 0 ? (
					arrPagesData[page - 1].map((project, i) => {
						return (
							<div key={i} className={sass.project}>
								<Image url={project.urlImage} classesWrap={sass['project-img-wrap']} classesImage={sass['project-img']} />

								<div className={sass.info}>
									<div className={sass.details}>
										<Heading text={project.name} classes={sass.title} />
										<Description classes={sass.description}>{project.briefDescription}</Description>
									</div>

									<div className={sass.buttons}>
										{project.site && (
											<Button classes={sass.button} click={() => onClickToSite(project.site)}>
												К сайту
											</Button>
										)}

										<Button classes={sass.button} click={() => onClickMore(project.id)}>
											Подробнее
										</Button>
									</div>
								</div>
							</div>
						)
					})
				) : (
					<div className={sass['no-projects']}>
						<Heading text='Нет проектов' classes={trimSass(sass, ['no-projects', 'title'])} />
					</div>
				)}
			</section>

			{arrPagesData.length !== 0 && <Pagination pages={arrPagesData.length} page={page} setPage={setCurrentPage} />}
		</main>
	)
}

export default Projects
