import React from 'react'
import sass from './Menu.module.sass'
import MenuLink from '../../ui/menuLink/MenuLink'
import MenuButton from '../../ui/menuButton/MenuButton'

interface PropsMenu {}

const Menu: React.FC<PropsMenu> = () => {
	const enterToCV = (): void => {
		window.location.hash = 'cv'
	}

	return (
		<ul className={sass.menu}>
			<MenuLink link='#about' text='Обо мне' />
			<MenuLink link='#skills' text='Навыки' />
			<MenuLink link='#portfolio' text='Портфолио' />
			<MenuButton text='CV-резюме' click={() => enterToCV()} />
		</ul>
	)
}

export default Menu
