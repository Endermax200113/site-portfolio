import React, { useEffect, useState } from 'react'
import Button from '@ui/button/Button'
import Image from '@ui/image/Image'
import sass from './Social.module.sass'

type SocialImage = {
	link: string
	urlImage: string
	altImage: string
}

const Social: React.FC = () => {
	const [arrButtons, setArrButtons] = useState<SocialImage[]>([])

	useEffect(() => {
		const arr: SocialImage[] = []

		arr.push({
			link: 'https://vk.com/maks_hallasaar',
			urlImage: require('@img/social/vk.png'),
			altImage: 'VK',
		})

		arr.push({
			link: 'https://github.com/Endermax200113',
			urlImage: require('@img/social/github.png'),
			altImage: 'GitHub',
		})

		arr.push({
			link: 'https://t.me/justmax2001',
			urlImage: require('@img/social/telegram.png'),
			altImage: 'Telegram',
		})

		setArrButtons(arr)
	}, [setArrButtons])

	return (
		<div className={sass.social}>
			{arrButtons.map(({ link, urlImage, altImage }, i) => {
				return (
					<Button classes={sass.button} key={i} click={() => window.open(link)}>
						<Image url={urlImage} alt={altImage} classesWrap={sass.wrap} />
					</Button>
				)
			})}
		</div>
	)
}

export default Social
