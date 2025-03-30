import React from 'react'
import sass from './Navbar.module.sass'
import { spotClass } from '@utils/headerControl'
import Logo from './logo/Logo'
import Menu from './menu/Menu'

interface PropsNavbar {
	isMain: boolean
	headerFixed: boolean
}

const Navbar: React.FC<PropsNavbar> = ({ isMain, headerFixed }) => {
	const navbarClass: string = spotClass(sass, 'navbar', isMain, headerFixed)

	return (
		<nav className={navbarClass}>
			<ul className={sass.menu}>
				<Logo isMain={isMain} headerFixed={headerFixed} />
				<Menu />
			</ul>
		</nav>
	)
}

export default Navbar
