import React, { Dispatch, HTMLAttributes, SetStateAction } from 'react'
import scss from './Navbar.module.scss'
import { spotClass } from '@utils/headerControl'
import Logo from './logo/Logo'
import Menu from './menu/Menu'
import { useAdaptiveSize } from '@hooks/useAdaptiveSize'

type State = [boolean, Dispatch<SetStateAction<boolean>>]

interface PropsNavbar extends HTMLAttributes<HTMLElement> {
	isMain: boolean
	headerFixed: boolean
	stateOpenMenu: State
}

const Navbar: React.FC<PropsNavbar> = ({ stateOpenMenu, isMain, headerFixed }) => {
	const isDesktop: boolean = useAdaptiveSize()
	const navbarClass: string = spotClass(scss, 'navbar', isMain, headerFixed, isDesktop)

	return (
		<nav className={navbarClass}>
			<ul className={scss.menu}>
				<Logo
					isMain={isMain}
					headerFixed={headerFixed}
				/>
				<Menu stateIsOpen={stateOpenMenu} />
			</ul>
		</nav>
	)
}

export default Navbar
