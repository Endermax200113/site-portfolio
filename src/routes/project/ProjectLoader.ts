import { dataPortfolio, DataPortfolio } from '@/data/portfolio'
import { Params } from 'react-router-dom'

const loadProject = (params: Params) => {
	if (!params.projectId) {
		throw new Response('В URL проекта не введён идентификатор!', {
			status: 404,
			statusText: 'Project ID number is not entered!',
		})
	} else {
		const regex: RegExp = /[0-9]+/

		if (!params.projectId.match(regex)) {
			throw new Response('В URL проекта указан неверный путь!', {
				status: 404,
				statusText: 'The project path is incorrect!',
			})
		}
	}

	const idProject: number = Number.parseInt(params.projectId)
	const dataPortfolioReversed: DataPortfolio[] = [...dataPortfolio].reverse()
	const project: DataPortfolio = dataPortfolioReversed[idProject]

	if (!project) {
		throw new Response('Такого проекта не существует!', {
			status: 404,
			statusText: 'There is no such project!',
		})
	}

	// return new Response(project, { status: 200 })
	return project
}

export { loadProject }
