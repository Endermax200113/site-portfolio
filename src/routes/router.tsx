import { createBrowserRouter } from 'react-router-dom'
import Main from './main/Main'
import Project from './project/Project'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/projects/:projectId',
		element: <Project />,
	},
])
