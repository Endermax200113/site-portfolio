import React, { useEffect, useState } from 'react'
import sass from './Menu.module.sass'
import Button from '@ui/button/Button'
import Link from '@ui/link/Link'

interface PropsMenu {}

type MenuLink = [link: string, text: string]

const Menu: React.FC<PropsMenu> = () => {
	const [arrMenu, setArrMenu] = useState<MenuLink[]>([])

	const enterToCV = (): void => {
		window.location.hash = ''
		window.location.hash = 'cv'
	}

	useEffect(() => {
		const arr: MenuLink[] = []

		arr.push(['#about', 'Обо мне'])
		arr.push(['#skills', 'Навыки'])
		arr.push(['#portfolio', 'Портфолио'])

		setArrMenu(arr)
	}, [setArrMenu])

	return (
		<ul className={sass.menu}>
			{arrMenu.map(([link, text], i) => {
				return (
					<li className={sass['menu-item']} key={i}>
						<Link link={link} text={text} />
					</li>
				)
			})}

			<li>
				<Button classes={sass.button} click={() => enterToCV()}>
					CV-резюме
				</Button>
			</li>
		</ul>
	)
}

export default Menu
