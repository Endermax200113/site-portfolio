import React, { LiHTMLAttributes } from 'react'
import scss from './Logo.module.scss'
import { Link } from 'react-router-dom'
import Image from '@ui/image/Image'
import { spotClass } from '@utils/headerControl'
import { useAdaptiveSize } from '@hooks/useAdaptiveSize'

const imgLogo = (await import('@img/logo.png')).default

interface PropsLogo extends LiHTMLAttributes<HTMLLIElement> {
	isMain: boolean
	headerFixed: boolean
}

const Logo: React.FC<PropsLogo> = ({ isMain, headerFixed }) => {
	const isDesktop: boolean = useAdaptiveSize()
	const logoClass: string = spotClass(scss, 'logo-img', isMain, headerFixed, isDesktop)

	const handleItemClick = (): void => {
		setTimeout(() => {
			window.scrollTo({
				top: 0,
			})

			const body: HTMLBodyElement = document.querySelector('.body') as HTMLBodyElement

			if (body.classList.contains('no-scroll')) {
				body.classList.remove('no-scroll')
			}
		}, 100)
	}

	return (
		<li className={scss['logo']}>
			<Link
				to='/'
				className={scss['logo-link']}
				onClick={handleItemClick}>
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
