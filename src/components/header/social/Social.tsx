import React from 'react'
import sass from './Social.module.sass'
import { ButtonContent, spotButton } from '@utils/spotButton'
import Button from '@ui/button/Button'

const Social: React.FC = () => {
	const socVK: ButtonContent = spotButton('social', require('@img/social/vk.png'), 'VK')
	const socGitHub: ButtonContent = spotButton('social', require('@img/social/github.png'), 'GitHub')
	const socTelegram: ButtonContent = spotButton('social', require('@img/social/telegram.png'), 'Telegram')

	return (
		<div className={sass.social}>
			<Button content={socVK} />
			<Button content={socGitHub} />
			<Button content={socTelegram} />
		</div>
	)
}

export default Social
