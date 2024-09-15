import React, { useEffect, useState } from 'react'
import sass from './Navbar.module.sass'
import { trimSass } from '../../utils/sassControl'

interface PropsNavbar {}

const Navbar: React.FC<PropsNavbar> = () => {
	const [navbarFixed, setNavbarFixed] = useState<boolean>(false)
	const [navbarClass, setNavbarClass] = useState<string>(sass.navbar)
	const [logoImgClass, setLogoImgClass] = useState<string>(sass['logo-img'])
	const [navClass, setNavClass] = useState<string>(sass.nav)

	useEffect(() => {
		document.addEventListener('scroll', e => {
			if (document.documentElement.scrollTop > 0) {
				if (!navbarFixed) {
					setNavbarFixed(true)
					setNavbarClass(trimSass(sass, ['navbar', 'fixed']))
					setNavClass(trimSass(sass, ['nav', 'fixed']))
					setLogoImgClass(trimSass(sass, ['logo-img', 'fixed']))
				}
			} else {
				if (navbarFixed) {
					setNavbarFixed(false)
					setNavbarClass(sass.navbar)
					setNavClass(sass.nav)
					setLogoImgClass(sass['logo-img'])
				}
			}
		})
	}, [navbarFixed])

	return (
		<nav className={navbarClass}>
			<ul className={navClass}>
				<li className={sass['nav-logo']}>
					<a href='/' className={sass['logo-link']}>
						<img className={logoImgClass} src={require('./../../assets/img/logo.png')} alt='Логотип' />
					</a>
				</li>

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
