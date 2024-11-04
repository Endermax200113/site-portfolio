import React from 'react'
import Button from '@ui/button/Button'
import Image from '@ui/image/Image'
import sass from './Social.module.sass'
import { dataHeaderSocialImage, DataHeaderSocialImage } from '@/data/headerSocial'
import { useArray } from '@hooks/useArray'

const Social: React.FC = () => {
	const arrButtons: DataHeaderSocialImage[] = useArray<DataHeaderSocialImage>(() => dataHeaderSocialImage)

	return (
		<div className={sass.social}>
			{arrButtons.map(({ link, urlImage, altImage }, i) => {
				return (
					<Button classes={sass.button} key={i} click={() => window.open(link)}>
						<Image url={urlImage} alt={altImage} classesWrap={sass.wrap} />
					</Button>
				)
			})}
		</div>
	)
}

export default Social
