import React from 'react'
import sass from './ImageGallery.module.sass'
import Image, { PropsImage } from '../Image'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsImageGallery extends PropsImage {}

const ImageGallery: React.FC<PropsImageGallery> = ({ url, alt, classWrap, className, ...props }) => {
	const classWrapImage: string = mergeAllClasses([sass.wrap], classWrap)
	const classImage: string = mergeAllClasses([sass.image], className)

	return (
		<div className={classWrapImage} {...props}>
			<Image className={classImage} url={url} alt={alt} id='image-gallery-main' />
		</div>
	)
}

export default ImageGallery
