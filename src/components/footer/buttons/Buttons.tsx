import React, { HTMLAttributes } from 'react'
import sass from './Buttons.module.sass'
import { dataImagesSocial } from '@/data/footer'
import ButtonFooterSocial from '@ui/button/buttonFooterSocial/ButtonFooterSocial'
import Image from '@ui/image/Image'

interface PropsButtons extends HTMLAttributes<HTMLDivElement> {}

const Buttons: React.FC<PropsButtons> = ({ ...props }) => {
	const handleClickOpenLink = (link: string) => {
		window.open(link, '_blank')
	}

	return (
		<div className={sass.buttons} {...props}>
			{dataImagesSocial.map(({ urlImage, altImage, link }, i) => {
				return (
					<ButtonFooterSocial onClick={() => handleClickOpenLink(link)} key={`button-footer-social-${i}`}>
						<Image url={urlImage} alt={altImage} classWrap={sass['image-wrap']} className={sass.image} />
					</ButtonFooterSocial>
				)
			})}
		</div>
	)
}

export default Buttons
