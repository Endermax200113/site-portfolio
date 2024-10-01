import React from 'react'
import sass from './Menu.module.sass'
import MenuLink from '@ui/menuLink/MenuLink'
import MenuButton from '@ui/menuButton/MenuButton'

interface PropsMenu {}

const Menu: React.FC<PropsMenu> = () => {
	const enterToCV = (): void => {
		window.location.hash = 'cv'
	}

	const arrMenu: [string, string][] = []

	arrMenu.push(['#about', 'Обо мне'])
	arrMenu.push(['#skills', 'Навыки'])
	arrMenu.push(['#portfolio', 'Портфолио'])

	return (
		<ul className={sass.menu}>
			{arrMenu.map(([link, text], i) => {
				return <MenuLink link={link} text={text} key={i} />
			})}

			<MenuButton text='CV-резюме' click={() => enterToCV()} />
		</ul>
	)
}

export default Menu
