import React from 'react'
import scss from './ButtonFooterSocial.module.scss'
import Button, { PropsButton } from '../Button'

interface PropsButtonFooterSocial extends PropsButton {}

const ButtonFooterSocial: React.FC<PropsButtonFooterSocial> = ({ children, ...props }) => {
	return (
		<Button
			className={scss.button}
			{...props}>
			{children}
		</Button>
	)
}

export default ButtonFooterSocial
