import React from 'react'
import sass from './Logo.module.sass'

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
				<img className={name} src={require('./../../../assets/img/logo.png')} alt='Логотип' />
			</a>
		</li>
	)
}

export const getLogoSass = (): PropsSass => {
	return sass
}

export default Logo
