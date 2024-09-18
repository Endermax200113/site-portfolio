import React from 'react'
import sass from './Menu.module.sass'
import MenuLink from './../menuLink/MenuLink'

interface PropsMenu {}

const Menu: React.FC<PropsMenu> = () => {
	return (
		<ul className={sass.menu}>
			<MenuLink link='#about' text='Обо мне' />
			<MenuLink link='#skills' text='Навыки' />
			<MenuLink link='#portfolio' text='Портфолио' />

			<li className={sass['menu-item']}>
				<button type='button' className={sass['menu-btn']}>
					CV-резюме
				</button>
			</li>
		</ul>
	)
}

export default Menu
