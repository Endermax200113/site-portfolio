import React, { Dispatch, SetStateAction } from 'react'
import scss from './ButtonMenu.module.scss'
import Button, { PropsButton } from '../Button'
import { mergeAllClasses } from '@utils/sassControl'

type State = [boolean, Dispatch<SetStateAction<boolean>>]

interface PropsButtonMenu extends PropsButton {
	stateIsOpen: State
}

const ButtonMenu: React.FC<PropsButtonMenu> = ({ stateIsOpen, ...props }) => {
	const [isOpen, setIsOpen] = stateIsOpen

	const classLine: string = mergeAllClasses([scss.line], isOpen ? scss.active : null)

	const handleMenuClick = (): void => {
		if (!isOpen) {
			setIsOpen(true)
		} else {
			setIsOpen(false)
		}
	}

	return (
		<Button
			className={scss.button}
			onClick={handleMenuClick}
			{...props}>
			<div className={classLine} />
		</Button>
	)
}

export default ButtonMenu
