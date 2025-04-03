import React, { HTMLAttributes } from 'react'
import sass from './Description.module.sass'
import { mergeAllClasses } from '@utils/sassControl'

export interface PropsDescription extends HTMLAttributes<HTMLParagraphElement> {
	className?: string
}

const Description: React.FC<PropsDescription> = ({ children, className, ...props }) => {
	const classDescription: string = mergeAllClasses([sass.description], className)

	return (
		<p className={classDescription} {...props}>
			{children}
		</p>
	)
}

export default Description
