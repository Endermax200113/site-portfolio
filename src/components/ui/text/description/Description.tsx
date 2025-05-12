import React, { HTMLAttributes } from 'react'
import scss from './Description.module.scss'
import { mergeAllClasses } from '@utils/sassControl'

export interface PropsDescription extends HTMLAttributes<HTMLParagraphElement> {
	className?: string
}

const Description: React.FC<PropsDescription> = ({ children, className, ...props }) => {
	const classDescription: string = mergeAllClasses([scss.description], className)

	return (
		<p
			className={classDescription}
			{...props}>
			{children}
		</p>
	)
}

export default Description
