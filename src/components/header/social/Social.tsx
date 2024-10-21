import React, { useEffect, useState } from 'react'
import Button from '@ui/button/Button'
import Image from '@ui/image/Image'
import sass from './Social.module.sass'

type SocialImage = [url: string, altImage: string]

const Social: React.FC = () => {
	const [arrButtons, setArrButtons] = useState<SocialImage[]>([])

	useEffect(() => {
		const arr: SocialImage[] = []

		arr.push([require('@img/social/vk.png'), 'VK'])
		arr.push([require('@img/social/github.png'), 'GitHub'])
		arr.push([require('@img/social/telegram.png'), 'Telegram'])

		setArrButtons(arr)
	}, [setArrButtons])

	return (
		<div className={sass.social}>
			{arrButtons.map(([url, altImage], i) => {
				return (
					<Button classes={sass.button} key={i}>
						<Image url={url} alt={altImage} classesWrap={sass.wrap} />
					</Button>
				)
			})}
		</div>
	)
}

export default Social
