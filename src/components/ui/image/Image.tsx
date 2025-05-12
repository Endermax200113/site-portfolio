import React, { ImgHTMLAttributes } from 'react'
import scss from './Image.module.scss'
import SVGImage from 'SVGImage'
import { mergeAllClasses } from '@utils/sassControl'

export interface PropsImage extends ImgHTMLAttributes<HTMLImageElement> {
	url?: string | SVGImage
	classWrap?: string
}

const Image: React.FC<PropsImage> = ({ url, alt, classWrap, className, ...props }) => {
	const URL: string = typeof url === 'string' ? url : typeof url !== 'undefined' ? url.default : 'no-found'
	const classImage: string = mergeAllClasses([scss.image], className)

	return classWrap ? (
		<div className={classWrap}>
			<img
				src={URL}
				alt={alt ?? ''}
				className={classImage}
				{...props}
			/>
		</div>
	) : (
		<img
			src={URL}
			alt={alt ?? ''}
			className={classImage}
			{...props}
		/>
	)
}

export default Image
