import React, { LiHTMLAttributes } from 'react'
import scss from './Menu.module.scss'
import { dataMenu, DataMenu } from '@/data/menu'
import MenuItem from './menuItem/MenuItem'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsMenu extends LiHTMLAttributes<HTMLLIElement> {
	isOpen: boolean
}

const Menu: React.FC<PropsMenu> = ({ isOpen, ...props }) => {
	const arrMenu: DataMenu[] = dataMenu
	const classMenuItem: string = mergeAllClasses([scss['menu-item']], isOpen ? scss.active : null)

	return (
		<li
			className={classMenuItem}
			{...props}>
			<ul className={scss['menu-list']}>
				{arrMenu.map(([link, text], i) => {
					return (
						<MenuItem
							link={link}
							text={text}
							key={`nav-menu-item-${new Date().getTime()}-${i}`}
						/>
					)
				})}
			</ul>
		</li>
	)
}

export default Menu
