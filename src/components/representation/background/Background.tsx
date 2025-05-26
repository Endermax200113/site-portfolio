import React, { HTMLAttributes, ReactNode } from 'react'
import scss from './Background.module.scss'
import Image from '@ui/image/Image'
import { useAdaptiveSize } from '@hooks/useAdaptiveSize'

const imgBackground = (await import('@img/representation/background-mobile.jpg')).default

interface PropsBackground extends HTMLAttributes<HTMLDivElement> {}

const Background: React.FC<PropsBackground> = () => {
	const isDesktop: boolean = useAdaptiveSize()

	const getBackgroundDesktop = (): ReactNode => {
		return (
			<>
				<div className={scss.detail} />
				<div className={scss['detail-transition']} />
			</>
		)
	}

	const getBackgroundMobile = (): ReactNode => {
		return (
			<>
				<Image
					url={imgBackground}
					className={scss['mobile-image']}
					alt='Задний фон для мобильной версии'
				/>

				<div className={scss['mobile-effects']} />
			</>
		)
	}

	return <div className={scss.background}>{isDesktop ? getBackgroundDesktop() : getBackgroundMobile()}</div>
}

export default Background
