import React, { LiHTMLAttributes } from 'react'
import scss from './MenuItem.module.scss'
import { NavLink } from 'react-router-dom'

interface PropsMenuItem extends LiHTMLAttributes<HTMLLIElement> {
	text: string
	link: string
}

const MenuItem: React.FC<PropsMenuItem> = ({ text, link }) => {
	return (
		<li className={scss['menu-item']}>
			<NavLink
				end
				to={link}
				className={scss['menu-link']}>
				{text}
			</NavLink>
		</li>
	)
}

export default MenuItem
