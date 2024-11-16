import { createBrowserRouter } from 'react-router-dom'
import Main from './main/Main'
import Project from './project/Project'
import ErrorBoundary from './errorBoundary/ErrorBoundary'
import loadProject from './project/ProjectLoader'
import LayoutRoute from './layoutRoute/LayoutRoute'

export const router = createBrowserRouter([
	{
		errorElement: <ErrorBoundary />,
		element: <LayoutRoute />,
		children: [
			{
				path: '/:block?',
				element: <Main />,
			},
			{
				path: '/projects/:projectId',
				element: <Project />,
				loader: ({ params }) => loadProject(params),
			},
		],
	},
])
