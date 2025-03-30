import React from 'react'
import sass from './Logo.module.sass'
import { Link } from 'react-router-dom'
import Image from '@ui/image/Image'
import { spotClass } from '@utils/headerControl'

interface PropsLogo {
	isMain: boolean
	headerFixed: boolean
}

const Logo: React.FC<PropsLogo> = ({ isMain, headerFixed }) => {
	const logoClass: string = spotClass(sass, 'logo-img', isMain, headerFixed)

	return (
		<li className={sass['logo']}>
			<Link to='/' className={sass['logo-link']}>
				<Image url={require('@img/logo.png')} classesImage={logoClass} alt='Логотип' />
			</Link>
		</li>
	)
}

export default Logo
