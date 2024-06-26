import React from 'react'
import sass from './Logo.module.sass'
import { transformTestClass } from '../../utils/sassControl'

type PropsLogo = {
	test?: boolean
}

const Logo: React.FC<PropsLogo> = ({ test }) => {
	const classLogo: string = transformTestClass(sass, ['logo'], test)
	const classLogoLink: string = transformTestClass(sass, ['logo-link'], test)

	return (
		<div className={classLogo}>
			<a href='/' className={classLogoLink}>
				Максим Халласаар
			</a>
		</div>
	)
}

export default Logo
