import React, { MouseEvent, ReactNode, useEffect, useState } from 'react'
import sass from './Button.module.sass'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsButton {
	children: ReactNode
	type?: 'big' | 'small' | 'custom'
	click?: (e?: MouseEvent) => void
	classes?: string
}

const Button: React.FC<PropsButton> = ({ type, children, click, classes }) => {
	const [allClassesButton, setAllClassesButton] = useState<string>(sass.big)

	useEffect(() => {
		const spotTypeButton = (classButton?: string): void => {
			switch (type) {
				case 'small':
					setAllClassesButton(mergeAllClasses([sass.small], classButton))
					break
				case 'big':
					setAllClassesButton(mergeAllClasses([sass.big], classButton))
					break
				case 'custom':
				default:
					setAllClassesButton(mergeAllClasses([sass.custom], classButton))
					break
			}
		}

		if (classes) spotTypeButton(classes)
		else spotTypeButton()
	}, [type, classes, setAllClassesButton])

	return (
		<button type='button' className={allClassesButton} onClick={e => click && click(e)}>
			{children}
		</button>
	)
}

export default Button
