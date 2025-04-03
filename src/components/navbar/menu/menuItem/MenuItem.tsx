import React, { LiHTMLAttributes } from 'react'
import sass from './MenuItem.module.sass'
import { NavLink } from 'react-router-dom'

interface PropsMenuItem extends LiHTMLAttributes<HTMLLIElement> {
	text: string
	link: string
}

const MenuItem: React.FC<PropsMenuItem> = ({ text, link }) => {
	return (
		<li className={sass['menu-item']}>
			<NavLink to={link} className={sass['menu-link']}>
				{text}
			</NavLink>
		</li>
	)
}

export default MenuItem
