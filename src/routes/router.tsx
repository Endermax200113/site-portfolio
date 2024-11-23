import { createBrowserRouter } from 'react-router-dom'
import Main from './main/Main'
import Project from './project/Project'
import ErrorBoundary from './errorBoundary/ErrorBoundary'
import { loadProject } from './project/ProjectLoader'
import LayoutRoute from './layoutRoute/LayoutRoute'
import { loadMain } from './main/MainLoader'

export const router = createBrowserRouter([
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
				path: '/projects/:projectId',
				element: <Project />,
				loader: ({ params }) => loadProject(params),
			},
		],
	},
])
