import React from 'react'
import sass from './Info.module.sass'
import Label from '@ui/text/label/Label'
import { TypeInfo } from '@helper/typeWelcome'

interface PropsInfo {}

const Info: React.FC<PropsInfo> = () => {
	return (
		<div className={sass.welcome}>
			<Label type={TypeInfo.WELCOME}>Привет! Я</Label>
			<Label type={TypeInfo.NAME}>Халласаар Максим</Label>
			<Label type={TypeInfo.PROFESSION}>Frontend-разработчик</Label>

			<div className={sass.social}>
				<button type='button' className={sass['social-btn']}>
					<img className={sass['social-img']} src={require('@img/social/vk.png')} alt='VK' />
				</button>

				<button type='button' className={sass['social-btn']}>
					<img className={sass['social-img']} src={require('@img/social/github.png')} alt='GitHub' />
				</button>

				<button type='button' className={sass['social-btn']}>
					<img className={sass['social-img']} src={require('@img/social/telegram.png')} alt='Telegram' />
				</button>
			</div>
		</div>
	)
}

export default Info
