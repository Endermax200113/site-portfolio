import React, { HTMLAttributes, MouseEvent } from 'react'
import sass from './Gallery.module.sass'
import { useClass } from '@hooks/useClass'
import Image from '@ui/image/Image'
import Button from '@ui/button/Button'
import Heading from '@ui/text/heading/Heading'

interface PropsGallery extends HTMLAttributes<HTMLElement> {
	name: string
	urlImage: string
	clickButton: (e?: MouseEvent) => void
}

const Gallery: React.FC<PropsGallery> = ({ name, urlImage, className, clickButton, ...props }) => {
	const allClassesGallery: string = useClass(sass.gallery, className)

	return (
		<article className={allClassesGallery} {...props}>
			<Image url={urlImage} classWrap={sass['img-wrap']} className={sass.img} />
			<Heading level='2' children={name} className={sass.name} mergeClass />
			<Button className={sass.show} onClick={clickButton} children='Посмотреть' />
		</article>
	)
}

export default Gallery
