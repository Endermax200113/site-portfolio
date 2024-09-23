import React from 'react'
import sass from './Header.module.sass'
import Navbar from '@components/navbar/Navbar'
import Info from './info/Info'

interface PropsHeader {}

const Header: React.FC<PropsHeader> = () => {
	return (
		<header className={sass.header}>
			<div className={sass.wrapper}>
				<div className={sass.detail}></div>
				<div className={sass['detail-transition']}></div>
			</div>

			<Navbar />

			<div className={sass['header-container']}>
				<div className={sass.begin}>
					<Info />

					<div className={sass.performance}>
						<div className={sass['performance-wrap']}>
							<img className={sass['performance-img']} src={require('@img/header/smartphone.png')} alt='Смартфон' />
						</div>

						<div className={sass['performance-wrap']}>
							<img className={sass['performance-img']} src={require('@img/header/tablet.png')} alt='Планшет' />
						</div>

						<div className={sass['performance-wrap']}>
							<img className={sass['performance-img']} src={require('@img/header/pc.png')} alt='Компьютер' />
						</div>

						<div className={sass['performance-wrap']}>
							<img className={sass['performance-img']} src={require('@img/header/laptop.png')} alt='Ноутбук' />
						</div>
					</div>
				</div>
			</div>

			<div id={sass.test}></div>
		</header>
	)
}

export default Header
