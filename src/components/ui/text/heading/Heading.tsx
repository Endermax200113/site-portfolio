import React, { createElement, HTMLAttributes } from 'react'
import scss from './Heading.module.scss'
import { mergeAllClasses } from '@utils/sassControl'

export interface PropsHeading extends HTMLAttributes<HTMLHeadingElement> {
	mergeClass?: boolean
	level?: '1' | '2' | '3' | '4' | '5' | '6'
}

const Heading: React.FC<PropsHeading> = ({ mergeClass, children, level, className, ...props }) => {
	const classHeading: string = mergeAllClasses([mergeClass || !className ? scss.heading : ''], className)

	return createElement(!level ? 'h1' : `h${level}`, { ...props, className: classHeading || null }, children)
}

export default Heading
