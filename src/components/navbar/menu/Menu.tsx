import React from 'react'
import sass from './Menu.module.sass'
import Button from '@ui/button/Button'
import Link from '@ui/link/Link'
import { DataMenu, dataMenu } from '@/data/menu'
import { useArray } from '@hooks/useArray'
import { NavigateFunction, NavLink, useNavigate } from 'react-router-dom'

interface PropsMenu {}

const Menu: React.FC<PropsMenu> = () => {
	const navigate: NavigateFunction = useNavigate()
	const arrMenu: DataMenu[] = useArray<DataMenu>(() => dataMenu)

	const enterToCV = (): void => {
		navigate('cv')
	}

	return (
		<ul className={sass.menu}>
			{arrMenu.map(([link, text], i) => {
				return (
					<li className={sass['menu-item']} key={i}>
						<NavLink to={link} className={sass.link}>
							{text}
						</NavLink>
					</li>
				)
			})}

			<li>
				<Button classes={sass.button} click={enterToCV}>
					CV-резюме
				</Button>
			</li>
		</ul>
	)
}

export default Menu
