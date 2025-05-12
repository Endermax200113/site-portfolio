import React, { HTMLAttributes } from 'react'
import scss from './Illustration.module.scss'
import Image from '@ui/image/Image'
import { mergeAllClasses } from '@utils/sassControl'
import SVG from 'SVGImage'

interface PropsIllustration extends HTMLAttributes<HTMLElement> {
	mergeClassText?: boolean
	classText?: string
	mergeClassIllustration?: boolean
	classImage?: string
	image?: string | SVG
	children?: string
}

const Illustration: React.FC<PropsIllustration> = ({ classText, mergeClassText, classImage, mergeClassIllustration, className, image, children, ...props }) => {
	const classIllustration: string = mergeAllClasses([mergeClassIllustration || !className ? scss.illustration : ''], className)
	const allClassesText: string = mergeAllClasses([mergeClassText || !classText ? scss.text : ''], classText)

	return (
		<figure
			className={classIllustration}
			{...props}>
			<Image
				url={image}
				className={classImage}
				alt={children}
			/>
			<figcaption
				className={allClassesText}
				children={children}
			/>
		</figure>
	)
}

export default Illustration
