import React, { useEffect, useState } from 'react'
import sass from './Button.module.sass'
import { ButtonContent, Content } from '@utils/spotButton'
import Image from '@ui/image/Image'

interface PropsButton {
	content: ButtonContent
}

const Button: React.FC<PropsButton> = ({ content }) => {
	const [classButton, setClassButton] = useState<string>(sass.social)
	const [imgButton, setImgButton] = useState<Content>('')
	const [imgAltButton, setImgAltButton] = useState<string>('')

	useEffect(() => {
		switch (content.type) {
			case 'social':
				setClassButton(sass.social)
				setImgButton(content.img)
				setImgAltButton(content.text)
				break
			case 'big':
			case 'small':
			default:
				break
		}
	}, [classButton, imgButton, content])

	return (
		<button type='button' className={classButton}>
			<Image url={imgButton} alt={imgAltButton} classesImage={sass.image} />
		</button>
	)
}

export default Button
