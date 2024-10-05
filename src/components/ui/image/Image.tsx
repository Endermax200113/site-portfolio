import React, { useEffect, useState } from 'react'
import sass from './Image.module.sass'
import SVGImage from 'SVGImage'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsImage {
	url: string | SVGImage
	alt?: string
	classes?: string
}

const Image: React.FC<PropsImage> = ({ url, alt, classes }) => {
	const [allClassesWrap, setAllClassesWrap] = useState<string>(sass.wrap)

	useEffect(() => {
		if (!classes) {
			setAllClassesWrap(sass.wrap)

			return
		}

		setAllClassesWrap(mergeAllClasses([sass.wrap], classes))
	}, [classes, setAllClassesWrap])

	return (
		<div className={allClassesWrap}>
			<img src={typeof url === 'string' ? url : url.default} alt={alt ?? ''} className={sass.img} />
		</div>
	)
}

export default Image
