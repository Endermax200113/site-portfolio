import React, { useEffect, useState } from 'react'
import sass from './Social.module.sass'
import { ButtonContent, spotButton } from '@utils/spotButton'
import Button from '@ui/button/Button'

const Social: React.FC = () => {
	const [arrButtons, setArrButtons] = useState<ButtonContent[]>([])

	useEffect(() => {
		const arr: ButtonContent[] = []

		arr.push(spotButton('social', require('@img/social/vk.png'), 'VK'))
		arr.push(spotButton('social', require('@img/social/github.png'), 'GitHub'))
		arr.push(spotButton('social', require('@img/social/telegram.png'), 'Telegram'))

		setArrButtons(arr)
	}, [setArrButtons])

	return (
		<div className={sass.social}>
			{arrButtons.map((btnContent, i) => {
				return <Button content={btnContent} classes={sass.button} key={i} />
			})}
		</div>
	)
}

export default Social
