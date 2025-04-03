import React, { ButtonHTMLAttributes } from 'react'
import sass from './Button.module.sass'

export interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<PropsButton> = ({ type, className, children, ...props }) => {
	return (
		<button type={type ?? 'button'} className={className ?? sass.default} {...props}>
			{children}
		</button>
	)
}

export default Button
