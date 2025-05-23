import React from 'react'
import { dataMenu, DataMenu } from '@/data/menu'
import MenuItem from './menuItem/MenuItem'

interface PropsMenu {}

const Menu: React.FC<PropsMenu> = () => {
	const arrMenu: DataMenu[] = dataMenu

	return (
		<>
			{arrMenu.map(([link, text], i) => {
				return (
					<MenuItem
						link={link}
						text={text}
						key={`nav-menu-item-${new Date().getTime()}-${i}`}
					/>
				)
			})}
		</>
	)
}

export default Menu
