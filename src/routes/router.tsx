import { createBrowserRouter } from 'react-router-dom'
import Main from './main/Main'
import Project from './project/Project'
import ErrorBoundary from './errorBoundary/ErrorBoundary'
import loadProject from './project/ProjectLoader'

export const router = createBrowserRouter([
	{
		errorElement: <ErrorBoundary />,
		children: [
			{
				path: '/',
				element: <Main />,
				children: [
					{
						path: '/projects/:projectId',
						element: <Project />,
						loader: ({ params }) => loadProject(params),
					},
				],
			},
		],
	},
])
