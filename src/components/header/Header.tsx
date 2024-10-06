import React from 'react'
import sass from './Header.module.sass'
import Navbar from '@components/navbar/Navbar'
import Info from './info/Info'
import Representation from './representation/Representation'

interface PropsHeader {}

const Header: React.FC<PropsHeader> = () => {
	return (
		<header className={sass.header}>
			<div className={sass.wrapper}>
				<div className={sass.detail}></div>
				<div className={sass['detail-transition']}></div>
			</div>

			<Navbar />

			<div className={sass['header-container']}>
				<div className={sass.begin}>
					<Info />
					<Representation />
				</div>
			</div>
		</header>
	)
}

export default Header
