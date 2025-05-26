import React, { Dispatch, LiHTMLAttributes, SetStateAction } from 'react'
import scss from './MenuItem.module.scss'
import { NavLink } from 'react-router-dom'

type State = [boolean, Dispatch<SetStateAction<boolean>>]

interface PropsMenuItem extends LiHTMLAttributes<HTMLLIElement> {
	text: string
	link: string
	stateIsOpen: State
}

const MenuItem: React.FC<PropsMenuItem> = ({ stateIsOpen, text, link }) => {
	const [, setIsOpen] = stateIsOpen

	const handleItemClick = (): void => {
		setIsOpen(false)
	}

	return (
		<li
			className={scss['menu-item']}
			onClick={handleItemClick}>
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
