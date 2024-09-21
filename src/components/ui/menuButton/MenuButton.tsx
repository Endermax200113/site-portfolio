import React, { MouseEvent } from 'react'
import sass from './MenuButton.module.sass'

interface PropsMenuButton {
	text: string
	click: (e?: MouseEvent) => void
}

const MenuButton: React.FC<PropsMenuButton> = ({ text, click }) => {
	return (
		<li className={sass['menu-item']}>
			<button type='button' className={sass['menu-btn']} onClick={e => click(e)}>
				{text}
			</button>
		</li>
	)
}

export default MenuButton
