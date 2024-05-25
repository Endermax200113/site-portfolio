import React from 'react'
import './NavLink.sass'

interface PropsNavLink {
	link: string,
	text: string
}

const NavLink: React.FC<PropsNavLink> = ({link, text}): JSX.Element => {
	//TODO Доработать, когда будет Router

	return (
		<li className='menu-item'><a href={link} className="menu-item__link">{text}</a></li>
	)
}

export default NavLink