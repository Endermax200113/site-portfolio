import React from 'react'
import sass from './Social.module.sass'
import { ButtonContent, spotButton } from '@utils/spotButton'
import Button from '@ui/button/Button'

const Social: React.FC = () => {
	const arrButtons: ButtonContent[] = []

	arrButtons.push(spotButton('social', require('@img/social/vk.png'), 'VK'))
	arrButtons.push(spotButton('social', require('@img/social/github.png'), 'GitHub'))
	arrButtons.push(spotButton('social', require('@img/social/telegram.png'), 'Telegram'))

	return (
		<div className={sass.social}>
			{arrButtons.map((btnContent, i) => {
				return <Button content={btnContent} key={i} />
			})}
		</div>
	)
}

export default Social
