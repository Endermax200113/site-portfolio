import React, { useEffect, useState } from 'react'
import sass from './Image.module.sass'
import SVGImage from 'SVGImage'
import { mergeAllClasses } from '@utils/sassControl'

type ObjectFit = 'contain' | 'cover' | 'fill' | 'scale-down' | 'none'

interface PropsImage {
	url: string | SVGImage
	alt?: string
	objectFit?: ObjectFit
	classesWrap?: string
	classesImage?: string
}

const Image: React.FC<PropsImage> = ({ url, alt, objectFit, classesWrap, classesImage }) => {
	const [classWrap, setClassWrap] = useState<string>('')
	const [allClassesImage, setAllClassesImage] = useState<string>(sass.image)

	useEffect(() => {
		const checkObjectFit = (classes?: string): void => {
			switch (objectFit) {
				case 'cover':
					setAllClassesImage(mergeAllClasses([sass.image, sass.cover], classes))
					break
				case 'fill':
					setAllClassesImage(mergeAllClasses([sass.image, sass.fill], classes))
					break
				case 'scale-down':
					setAllClassesImage(mergeAllClasses([sass.image, sass['scale-down']], classes))
					break
				case 'none':
					setAllClassesImage(mergeAllClasses([sass.image, sass.none], classes))
					break
				case 'contain':
				default:
					setAllClassesImage(mergeAllClasses([sass.image], classes))
					break
			}
		}

		if (!classesWrap) {
			setClassWrap('')
		} else {
			setClassWrap(classesWrap)
		}

		if (!classesImage) {
			checkObjectFit()
		} else {
			checkObjectFit(classesImage)
		}
	}, [classesWrap, classesImage, objectFit, setClassWrap, setAllClassesImage])

	return (
		<div className={classWrap}>
			<img src={typeof url === 'string' ? url : url.default} alt={alt ?? ''} className={allClassesImage} />
		</div>
	)
}

export default Image
