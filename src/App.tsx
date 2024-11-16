import { FC } from 'react'
import '@sass/App.sass'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'

const App: FC = () => {
	return (
		<div className='app'>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
