import React from 'react'
import sass from './MenuLink.module.sass'

interface PropsMenuLink {
	link: string
	text: string
}

const MenuLink: React.FC<PropsMenuLink> = ({ link, text }) => {
	return (
		<li className={sass['menu-item']}>
			<a href={link} className={sass['menu-link']}>
				{text}
			</a>
		</li>
	)
}

export default MenuLink
