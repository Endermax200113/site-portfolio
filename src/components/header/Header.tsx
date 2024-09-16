import React from 'react'
import sass from './Header.module.sass'
import Navbar from '../navbar/Navbar'

interface PropsHeader {}

const Header: React.FC<PropsHeader> = () => {
	return (
		<header className={sass.header}>
			<div className={sass.wrapper}>
				<div className={sass.detail}></div>
			</div>

			<Navbar />

			<div className={sass['header-container']}>
				<div className={sass.begin}>
					<div className={sass.welcome}>
						<div className={sass.hello}>Привет! Я</div>
						<div className={sass.name}>Халласаар Максим</div>
						<div className={sass.who}>Frontend-разработчик</div>

						<div className={sass.social}>
							<button type='button' className={sass['social-btn']}>
								<img className={sass['social-img']} src={require('./../../assets/img/social/vk.png')} alt='VK' />
							</button>

							<button type='button' className={sass['social-btn']}>
								<img className={sass['social-img']} src={require('./../../assets/img/social/github.png')} alt='GitHub' />
							</button>

							<button type='button' className={sass['social-btn']}>
								<img className={sass['social-img']} src={require('./../../assets/img/social/telegram.png')} alt='Telegram' />
							</button>
						</div>
					</div>

					<div className={sass.performance}>
						<div className={sass['performance-wrap']}>
							<img className={sass['performance-img']} src={require('./../../assets/img/header/smartphone.png')} alt='Смартфон' />
						</div>

						<div className={sass['performance-wrap']}>
							<img className={sass['performance-img']} src={require('./../../assets/img/header/tablet.png')} alt='Планшет' />
						</div>

						<div className={sass['performance-wrap']}>
							<img className={sass['performance-img']} src={require('./../../assets/img/header/pc.png')} alt='Компьютер' />
						</div>

						<div className={sass['performance-wrap']}>
							<img className={sass['performance-img']} src={require('./../../assets/img/header/laptop.png')} alt='Ноутбук' />
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
