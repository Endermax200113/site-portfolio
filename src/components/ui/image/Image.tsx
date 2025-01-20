import React, { HTMLAttributes, ImgHTMLAttributes } from 'react'
import sass from './Image.module.sass'
import SVGImage from 'SVGImage'
import { useClass } from '@hooks/useClass'

interface PropsImage {
	url: string | SVGImage
	alt?: string
	classesWrap?: string
	classesImage?: string
}

const Image: React.FC<PropsImage> = ({ url, alt, classesWrap, classesImage }) => {
	const classWrap: string = useClass('', classesWrap)
	const allClassesImage: string = useClass(sass.image, classesImage)

	const URL: string = typeof url === 'string' ? url : url.default

	return classesWrap ? (
		<div className={classWrap}>
			<img src={URL} alt={alt ?? ''} className={allClassesImage} />
		</div>
	) : (
		<img src={URL} alt={alt ?? ''} className={allClassesImage} />
	)
}

export default Image
