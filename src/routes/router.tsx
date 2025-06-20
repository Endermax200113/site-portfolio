import { createHashRouter } from 'react-router-dom'
import Main from './main/Main'
import Project from './project/Project'
import ErrorBoundary from './error-boundary/ErrorBoundary'
import { loadProject } from './project/ProjectLoader'
import LayoutRoute from './layout-route/LayoutRoute'
import { loadMain } from './main/MainLoader'
import Projects from './projects/Projects'
import { loadProjects } from './projects/ProjectsLoader'

export const router = createHashRouter([
	{
		errorElement: <ErrorBoundary />,
		element: <LayoutRoute />,
		children: [
			{
				path: '/:block?',
				element: <Main />,
				errorElement: <ErrorBoundary />,
				loader: ({ params }) => loadMain(params),
			},
			{
				path: '/projects',
				element: <Projects />,
				errorElement: <ErrorBoundary />,
				loader: ({ request }) => loadProjects(request),
			},
			{
				path: '/projects/:projectId',
				element: <Project />,
				errorElement: <ErrorBoundary />,
				loader: ({ params }) => loadProject(params),
			},
		],
	},
])
