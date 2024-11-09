import React, { useCallback, useEffect, useState } from 'react'
import sass from './Navbar.module.sass'
import { trimSass } from '@utils/sassControl'
import Logo, { getLogoSass } from '@ui/logo/Logo'
import Menu from './menu/Menu'

interface PropsNavbar {
	isMain?: boolean
}

const Navbar: React.FC<PropsNavbar> = ({ isMain }) => {
	const [navbarFixed, setNavbarFixed] = useState<boolean>(false)
	const [navbarClass, setNavbarClass] = useState<string>(sass.navbar)
	const [logoImgClass, setLogoImgClass] = useState<string>(getLogoSass()['logo-img'])
	const [navClass, setNavClass] = useState<string>(sass.nav)

	type EventScroll = {
		(e: Event): void
	}

	const onScrolling: EventScroll = useCallback(() => {
		if (window.scrollY === 0) {
			if (navbarFixed) setNavbarFixed(false)
		} else {
			if (!navbarFixed) setNavbarFixed(true)
		}
	}, [navbarFixed])

	useEffect(() => {
		if (isMain) {
			window.addEventListener('scroll', onScrolling)

			if (navbarFixed) {
				setNavbarClass(trimSass(sass, ['navbar', 'fixed']))
				setNavClass(trimSass(sass, ['nav', 'fixed']))
				setLogoImgClass(trimSass(getLogoSass(), ['logo-img', 'fixed']))
			} else {
				setNavbarClass(sass.navbar)
				setNavClass(sass.nav)
				setLogoImgClass(getLogoSass()['logo-img'])
			}
		} else {
			setNavbarClass(trimSass(sass, ['navbar', 'fixed', 'rest']))
			setNavClass(trimSass(sass, ['nav', 'fixed', 'rest']))
			setLogoImgClass(trimSass(getLogoSass(), ['logo-img', 'fixed', 'rest']))
		}

		return () => {
			if (isMain) window.removeEventListener('scroll', onScrolling)
		}
	}, [navbarFixed, isMain, onScrolling])

	return (
		<nav className={navbarClass}>
			<ul className={navClass}>
				<Logo name={logoImgClass} />
				<Menu />
			</ul>
		</nav>
	)
}

export default Navbar
