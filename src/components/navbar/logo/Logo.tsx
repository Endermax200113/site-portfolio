import React, { LiHTMLAttributes } from 'react'
import sass from './Logo.module.sass'
import { Link } from 'react-router-dom'
import Image from '@ui/image/Image'
import { spotClass } from '@utils/headerControl'

const imgLogo = (await import('@img/logo.png')).default

interface PropsLogo extends LiHTMLAttributes<HTMLLIElement> {
	isMain: boolean
	headerFixed: boolean
}

const Logo: React.FC<PropsLogo> = ({ isMain, headerFixed }) => {
	const logoClass: string = spotClass(sass, 'logo-img', isMain, headerFixed)

	const handleClickItem = (): void => {
		setTimeout(() => {
			window.scrollTo({
				top: 0,
			})
		}, 100)
	}

	return (
		<li className={sass['logo']}>
			<Link
				to='/'
				className={sass['logo-link']}
				onClick={handleClickItem}>
				<Image
					url={imgLogo}
					className={logoClass}
					alt='Логотип'
				/>
			</Link>
		</li>
	)
}

export default Logo
