import React from 'react'
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

	return classesWrap ? (
		<div className={classWrap}>
			<img src={typeof url === 'string' ? url : url.default} alt={alt ?? ''} className={allClassesImage} />
		</div>
	) : (
		<img src={typeof url === 'string' ? url : url.default} alt={alt ?? ''} className={allClassesImage} />
	)
}

export default Image
