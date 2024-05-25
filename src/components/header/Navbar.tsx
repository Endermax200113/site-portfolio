import React from 'react'
import './Navbar.sass'
import NavLink from './../UI/navlink/NavLink'
import NavButton from '../UI/button/NavButton'

const Navbar: React.FC = (): JSX.Element => {
	return (
		<nav className="menu">
			<ul className="menu-list">
				<NavLink link='#' text='Обо мне' />
				<NavLink link='#' text='Навыки' />
				<NavLink link='#' text='Портфолио' />
				<NavLink link='#' text='Контакты' />
			</ul>

			<NavButton text="CV-резюме" />
		</nav>
	)
}

export default Navbar