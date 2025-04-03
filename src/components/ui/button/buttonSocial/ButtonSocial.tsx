import React from 'react'
import sass from './ButtonSocial.module.sass'
import Button, { PropsButton } from '../Button'
import Image from '@ui/image/Image'
import SVG from 'SVGImage'

interface PropsButtonSocial extends PropsButton {
	link: string
	icon: SVG | string
	nameIcon?: string
}

const ButtonSocial: React.FC<PropsButtonSocial> = ({ link, icon, nameIcon, ...props }) => {
	const handleClick = (): Window | null => window.open(link)

	return (
		<Button className={sass.button} {...props} onClick={handleClick}>
			<Image url={icon} alt={nameIcon} classWrap={sass.wrap} />
		</Button>
	)
}

export default ButtonSocial
