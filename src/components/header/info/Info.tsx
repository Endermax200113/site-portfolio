import React from 'react'
import sass from './Info.module.sass'

type PropsInfo = {}

const Info: React.FC<PropsInfo> = () => {
	return (
		<div className={sass.welcome}>
			<div className={sass.hello}>Привет! Я</div>
			<div className={sass.name}>Халласаар Максим</div>
			<div className={sass.who}>Frontend-разработчик</div>

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
