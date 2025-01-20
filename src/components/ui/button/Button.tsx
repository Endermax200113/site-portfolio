import React, { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react'
import sass from './Button.module.sass'
import { useClass } from '@hooks/useClass'

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	click?: (e?: MouseEvent) => void
	classes?: string
}

const Button: React.FC<PropsButton> = ({ children, click, classes, ...props }) => {
	const allClassesButton: string = useClass(!classes ? sass.default : '', classes)

	return (
		<button type='button' className={allClassesButton} onClick={e => click && click(e)} {...props}>
			{children}
		</button>
	)
}

export default Button
