import React from 'react'
import sass from './Logo.module.sass'
import Image from '@ui/image/Image'

interface PropsLogo {
	name: string
}

type PropsSass = {
	readonly [key: string]: string
}

const Logo: React.FC<PropsLogo> = ({ name }) => {
	return (
		<li className={sass['nav-logo']}>
			<a href='/' className={sass['logo-link']}>
				<Image url={require('@img/logo.png')} classesImage={name} alt='Логотип' />
			</a>
		</li>
	)
}

export const getLogoSass = (): PropsSass => {
	return sass
}

export default Logo
