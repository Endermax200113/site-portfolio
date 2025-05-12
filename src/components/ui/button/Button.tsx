import React, { ButtonHTMLAttributes } from 'react'
import scss from './Button.module.scss'

export interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<PropsButton> = ({ type, className, children, ...props }) => {
	return (
		<button
			type={type ?? 'button'}
			className={className ?? scss.default}
			{...props}>
			{children}
		</button>
	)
}

export default Button
