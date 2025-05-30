import React, { HTMLAttributes } from 'react'
import scss from './Buttons.module.scss'
import { dataImagesSocial } from '@/data/footer'
import ButtonFooterSocial from '@ui/button/button-footer-social/ButtonFooterSocial'
import Image from '@ui/image/Image'

interface PropsButtons extends HTMLAttributes<HTMLDivElement> {}

const Buttons: React.FC<PropsButtons> = ({ ...props }) => {
	const handleClickOpenLink = (link: string) => {
		window.open(link, '_blank')
	}

	return (
		<div
			className={scss.buttons}
			{...props}>
			{dataImagesSocial.map(({ urlImage, altImage, link }, i) => {
				return (
					<ButtonFooterSocial
						onClick={() => handleClickOpenLink(link)}
						key={`button-footer-social-${i}`}>
						<Image
							url={urlImage}
							alt={altImage}
							classWrap={scss['image-wrap']}
							className={scss.image}
						/>
					</ButtonFooterSocial>
				)
			})}
		</div>
	)
}

export default Buttons
