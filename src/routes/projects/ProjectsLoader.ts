import { dataPortfolio } from '@/data/portfolio'
import { json } from 'react-router-dom'

const loadProjects = (): Response => {
	return json(dataPortfolio, { status: 200 })
}

export { loadProjects }
