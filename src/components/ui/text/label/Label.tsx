import React, { createElement, HTMLAttributes } from 'react'
import scss from './Label.module.scss'
import { mergeAllClasses } from '@utils/sassControl'

export interface PropsLabel extends HTMLAttributes<HTMLDivElement> {
	type?: 'div' | 'span'
	mergeClass?: boolean
}

const Label: React.FC<PropsLabel> = ({ type, mergeClass, className, children, ...props }) => {
	const classLabel: string = mergeAllClasses([mergeClass || !className ? scss.label : ''], className)

	return createElement(!type ? 'div' : type, { className: classLabel, ...props }, children)
}

export default Label
