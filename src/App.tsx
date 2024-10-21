import React from 'react'
import '@sass/App.sass'
import Header from '@components/header/Header'
import Main from '@components/main/Main'
import Footer from '@components/footer/Footer'

const App: React.FC = () => {
	return (
		<div className='app'>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

export default App
