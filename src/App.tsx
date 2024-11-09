import { FC } from 'react'
import '@sass/App.sass'
import Footer from '@components/footer/Footer'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import Header from '@components/header/Header'

const App: FC = () => {
	return (
		<div className='app'>
			<Header />
			<RouterProvider router={router} />
			<Footer />
		</div>
	)
}

export default App
