import React, { useCallback, useEffect, useState } from 'react'
import sass from './Navbar.module.sass'
import { trimSass } from '../../utils/sassControl'
import Logo, { getLogoSass } from '../ui/logo/Logo'

interface PropsNavbar {}

const Navbar: React.FC<PropsNavbar> = () => {
	const [navbarFixed, setNavbarFixed] = useState<boolean>(false)
	const [navbarClass, setNavbarClass] = useState<string>(sass.navbar)
	const [logoImgClass, setLogoImgClass] = useState<string>(getLogoSass()['logo-img'])
	const [navClass, setNavClass] = useState<string>(sass.nav)

	type EventScroll = {
		(e: Event): void
	}

	const onScrolling: EventScroll = useCallback(() => {
		if (document.documentElement.scrollTop === 0) {
			if (navbarFixed) setNavbarFixed(false)
		} else {
			if (!navbarFixed) setNavbarFixed(true)
		}
	}, [navbarFixed])

	useEffect(() => {
		if (!document.onscroll) document.addEventListener('scroll', onScrolling)

		if (navbarFixed) {
			setNavbarClass(trimSass(sass, ['navbar', 'fixed']))
			setNavClass(trimSass(sass, ['nav', 'fixed']))
			setLogoImgClass(trimSass(getLogoSass(), ['logo-img', 'fixed']))
		} else {
			setNavbarClass(sass.navbar)
			setNavClass(sass.nav)
			setLogoImgClass(getLogoSass()['logo-img'])
		}
	}, [navbarFixed, onScrolling])

	return (
		<nav className={navbarClass}>
			<ul className={navClass}>
				<Logo name={logoImgClass} />

				<ul className={sass.menu}>
					<li className={sass['menu-item']}>
						<a href='#about' className={sass['menu-link']}>
							Обо ме
						</a>
					</li>

					<li className={sass['menu-item']}>
						<a href='#skills' className={sass['menu-link']}>
							Навыки
						</a>
					</li>

					<li className={sass['menu-item']}>
						<a href='#portfolio' className={sass['menu-link']}>
							Портфолио
						</a>
					</li>

					<li className={sass['menu-item']}>
						<button type='button' className={sass['menu-btn']}>
							CV-резюме
						</button>
					</li>
				</ul>
			</ul>
		</nav>
	)
}

export default Navbar
