import React from 'react'
import scss from './ImageGallery.module.scss'
import Image, { PropsImage } from '../Image'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsImageGallery extends PropsImage {}

const ImageGallery: React.FC<PropsImageGallery> = ({ url, alt, classWrap, className, ...props }) => {
	const classWrapImage: string = mergeAllClasses([scss.wrap], classWrap)
	const classImage: string = mergeAllClasses([scss.image], className)

	return (
		<div
			className={classWrapImage}
			{...props}>
			<Image
				className={classImage}
				url={url}
				alt={alt}
				id='image-gallery-main'
			/>
		</div>
	)
}

export default ImageGallery
