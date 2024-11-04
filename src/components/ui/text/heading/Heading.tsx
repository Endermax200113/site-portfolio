import React, { createElement } from 'react'
import sass from './Heading.module.sass'
import { useClass } from '@hooks/useClass'

interface PropsHeading {
	text: string
	level?: '1' | '2' | '3' | '4' | '5' | '6'
	classes?: string
}

const Heading: React.FC<PropsHeading> = ({ text, level, classes }) => {
	const allClassesHeading: string = useClass(sass.heading, classes)

	return createElement(!level ? 'h1' : `h${level}`, { className: allClassesHeading }, text)
}

export default Heading
