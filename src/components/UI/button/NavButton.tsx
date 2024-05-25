import React from 'react'
import './NavButton.sass'

interface PropsNavButton {
	text: string
}

const NavButton: React.FC<PropsNavButton> = ({text}): JSX.Element => {
	return (
		<button className='menu-button' type='button'>{text}</button>
	)
}

export default NavButton