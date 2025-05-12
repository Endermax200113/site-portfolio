import React, { HTMLAttributes, MouseEvent } from 'react'
import scss from './Gallery.module.scss'
import Image from '@ui/image/Image'
import Button from '@ui/button/Button'
import Heading from '@ui/text/heading/Heading'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsGallery extends HTMLAttributes<HTMLElement> {
	name: string
	urlImage: string
	clickButton: (e?: MouseEvent) => void
}

const Gallery: React.FC<PropsGallery> = ({ name, urlImage, className, clickButton, ...props }) => {
	const allClassesGallery: string = mergeAllClasses([scss.gallery], className)

	return (
		<article
			className={allClassesGallery}
			{...props}>
			<Image
				url={urlImage}
				classWrap={scss['img-wrap']}
				className={scss.img}
			/>
			<Heading
				level='2'
				children={name}
				className={scss.name}
				mergeClass
			/>
			<Button
				className={scss.show}
				onClick={clickButton}
				children='Посмотреть'
			/>
		</article>
	)
}

export default Gallery
