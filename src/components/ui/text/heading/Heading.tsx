import React, { useEffect, useState } from 'react'
import sass from './Heading.module.sass'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsHeading {
	text: string
	classes?: string
}

const Heading: React.FC<PropsHeading> = ({ text, classes }) => {
	const [allClassesHeading, setAllClassesHeading] = useState<string>(sass.heading)

	useEffect(() => {
		if (!classes) {
			setAllClassesHeading(sass.heading)

			return
		}

		setAllClassesHeading(mergeAllClasses([sass.heading], classes))
	}, [classes, setAllClassesHeading])

	return <h1 className={allClassesHeading}>{text}</h1>
}

export default Heading
