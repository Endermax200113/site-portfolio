import Footer from '@components/footer/Footer'
import Header from '@components/header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

interface PropsLayoutRoute {}

const LayoutRoute: React.FC<PropsLayoutRoute> = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default LayoutRoute
