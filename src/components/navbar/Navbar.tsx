import React, { HTMLAttributes } from 'react'
import scss from './Navbar.module.scss'
import { spotClass } from '@utils/headerControl'
import Logo from './logo/Logo'
import Menu from './menu/Menu'

interface PropsNavbar extends HTMLAttributes<HTMLElement> {
	isMain: boolean
	headerFixed: boolean
}

const Navbar: React.FC<PropsNavbar> = ({ isMain, headerFixed }) => {
	const navbarClass: string = spotClass(scss, 'navbar', isMain, headerFixed)

	return (
		<nav className={navbarClass}>
			<ul className={scss.menu}>
				<Logo
					isMain={isMain}
					headerFixed={headerFixed}
				/>
				<Menu />
			</ul>
		</nav>
	)
}

export default Navbar
