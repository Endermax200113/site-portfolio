import React, { MouseEvent } from 'react'
import sass from './Gallery.module.sass'
import { useClass } from '@hooks/useClass'
import Image from '@ui/image/Image'
import Button from '@ui/button/Button'
import Heading from '@ui/text/heading/Heading'

interface PropsGallery {
	name: string
	urlImage: string
	classes?: string
	clickButton: (e?: MouseEvent) => void
}

const Gallery: React.FC<PropsGallery> = ({ name, urlImage, classes, clickButton }) => {
	const allClassesGallery: string = useClass(sass.gallery, classes)

	return (
		<div className={allClassesGallery}>
			<Image url={urlImage} classesWrap={sass['img-wrap']} classesImage={sass.img} />

			<Heading level='3' text={name} classes={sass.name} />

			<Button classes={sass.show} click={clickButton}>
				Посмотреть
			</Button>
		</div>
	)
}

export default Gallery
