import { DataPortfolio, dataPortfolio } from '@/data/portfolio'
import { json } from 'react-router-dom'

const loadProjects = (request: Request): Response => {
	const searchParams: URLSearchParams = new URL(request.url).searchParams
	const page: number = Number.parseInt(searchParams.get('page') || '1')

	const countProjects: number = dataPortfolio.length
	const pages: number = Math.ceil(countProjects / 10)

	if (pages < page) {
		throw new Response('Номер страницы проекта указан неверно', {
			status: 404,
			statusText: 'The project page number is indicated incorrectly',
		})
	}

	const arrPages: DataPortfolio[][] = []

	i: for (let i = 0; i < pages; i++) {
		arrPages.push([])

		for (let j = i * 10; j < i * 10 + 10; j++) {
			if (!dataPortfolio[j]) break i

			arrPages[i].push(dataPortfolio[j])
		}
	}

	type Data = {
		page: number
		projects: DataPortfolio[][]
	}

	const data: Data = {
		page,
		projects: arrPages,
	}

	return json(data, { status: 200 })
}

export { loadProjects }
