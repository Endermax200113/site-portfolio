import React from 'react'
import sass from './Menu.module.sass'
import Button from '@ui/button/Button'
import Link from '@ui/link/Link'
import { DataMenu, dataMenu } from '@/data/menu'
import { useArray } from '@hooks/useArray'

interface PropsMenu {}

const Menu: React.FC<PropsMenu> = () => {
	const arrMenu: DataMenu[] = useArray<DataMenu>(() => dataMenu)

	const enterToCV = (): void => {
		window.location.hash = ''
		window.location.hash = 'cv'
	}

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
