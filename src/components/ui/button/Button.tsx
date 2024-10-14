import React, { useEffect, useState } from 'react'
import sass from './Button.module.sass'
import { ButtonContent, Content } from '@utils/spotButton'
import Image from '@ui/image/Image'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsButton {
	content: ButtonContent
	classes?: string
}

const Button: React.FC<PropsButton> = ({ content, classes }) => {
	const [classButton, setClassButton] = useState<string>(sass.social)
	const [imgButton, setImgButton] = useState<Content>('')
	const [imgAltButton, setImgAltButton] = useState<string>('')

	useEffect(() => {
		const spotTypeButton = (classes?: string): void => {
			switch (content.type) {
				case 'social':
					setClassButton(mergeAllClasses([sass.social], classes))
					setImgButton(content.img)
					setImgAltButton(content.text)
					break
				case 'big':
					setClassButton(mergeAllClasses([sass.big], classes))
					break
				case 'small':
					setClassButton(mergeAllClasses([sass.small], classes))
					break
				default:
					console.error(new Error('Систематическая ошибка! В компоненте "Button" отсутствует аргумент тип кнопки.'), content.type)
					break
			}
		}

		if (classes) spotTypeButton(classes)
		else spotTypeButton()
	}, [content, classes, setClassButton, setImgButton, setImgAltButton])

	return (
		<button type='button' className={classButton}>
			{content.img !== '' ? <Image url={imgButton} alt={imgAltButton} classesImage={sass.image} /> : <span>{content.text}</span>}
		</button>
	)
}

export default Button
