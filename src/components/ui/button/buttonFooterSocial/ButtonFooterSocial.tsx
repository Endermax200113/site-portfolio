import React from 'react'
import sass from './ButtonFooterSocial.module.sass'
import Button, { PropsButton } from '../Button'

interface PropsButtonFooterSocial extends PropsButton {}

const ButtonFooterSocial: React.FC<PropsButtonFooterSocial> = ({ children, ...props }) => {
	return (
		<Button className={sass.button} {...props}>
			{children}
		</Button>
	)
}

export default ButtonFooterSocial
