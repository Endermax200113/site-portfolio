import React, { HTMLAttributes } from 'react'
import sass from './Social.module.sass'
import { dataHeaderSocialImage, DataHeaderSocialImage } from '@/data/headerSocial'
import ButtonSocial from '@ui/button/buttonSocial/ButtonSocial'

interface PropsSocial extends HTMLAttributes<HTMLDivElement> {}

const Social: React.FC<PropsSocial> = () => {
	const arrButtons: DataHeaderSocialImage[] = dataHeaderSocialImage

	return (
		<div className={sass.social}>
			{arrButtons.map(({ link, urlImage, altImage }, i) => {
				return <ButtonSocial link={link} icon={urlImage} nameIcon={altImage} key={`button-header-social-${i}`} />
			})}
		</div>
	)
}

export default Social
