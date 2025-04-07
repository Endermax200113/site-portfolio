import React, { HTMLAttributes } from 'react'
import sass from './Label.module.sass'
import { mergeAllClasses } from '@utils/sassControl'

export interface PropsLabel extends HTMLAttributes<HTMLDivElement> {
	mergeClass?: boolean
}

const Label: React.FC<PropsLabel> = ({ mergeClass, className, ...props }) => {
	const classLabel: string = mergeAllClasses([mergeClass || !className ? sass.label : ''], className)

	return (
		<div className={classLabel} {...props}>
			{props.children}
		</div>
	)
}

export default Label
