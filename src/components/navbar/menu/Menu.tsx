import React, { Dispatch, LiHTMLAttributes, SetStateAction } from 'react'
import scss from './Menu.module.scss'
import { dataMenu, DataMenu } from '@/data/menu'
import MenuItem from './menuItem/MenuItem'
import { mergeAllClasses } from '@utils/sassControl'

type State = [boolean, Dispatch<SetStateAction<boolean>>]

interface PropsMenu extends LiHTMLAttributes<HTMLLIElement> {
	stateIsOpen: State
}

const Menu: React.FC<PropsMenu> = ({ stateIsOpen, ...props }) => {
	const [isOpen] = stateIsOpen

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
							stateIsOpen={stateIsOpen}
							key={`nav-menu-item-${new Date().getTime()}-${i}`}
						/>
					)
				})}
			</ul>
		</li>
	)
}

export default Menu
