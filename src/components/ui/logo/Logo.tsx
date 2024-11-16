import React from 'react'
import sass from './Logo.module.sass'
import Image from '@ui/image/Image'
import { Link } from 'react-router-dom'

interface PropsLogo {
	name: string
}

type PropsSass = {
	readonly [key: string]: string
}

const Logo: React.FC<PropsLogo> = ({ name }) => {
	return (
		<li className={sass['nav-logo']}>
			<Link to='/' className={sass['logo-link']}>
				<Image url={require('@img/logo.png')} classesImage={name} alt='Логотип' />
			</Link>
		</li>
	)
}

export const getLogoSass = (): PropsSass => {
	return sass
}

export default Logo
