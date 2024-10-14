import React, { createElement, useEffect, useState } from 'react'
import sass from './Heading.module.sass'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsHeading {
	text: string
	level?: '1' | '2' | '3' | '4' | '5' | '6'
	classes?: string
}

const Heading: React.FC<PropsHeading> = ({ text, level, classes }) => {
	const [allClassesHeading, setAllClassesHeading] = useState<string>(sass.heading)

	useEffect(() => {
		if (!classes) {
			setAllClassesHeading(sass.heading)
			return
		}

		setAllClassesHeading(mergeAllClasses([sass.heading], classes))
	}, [classes, setAllClassesHeading])

	return createElement(!level ? 'h1' : `h${level}`, { className: allClassesHeading }, text)
}

export default Heading
