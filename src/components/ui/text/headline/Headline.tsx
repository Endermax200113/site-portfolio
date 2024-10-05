import React, { useEffect, useState } from 'react'
import sass from './Headline.module.sass'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsHeadline {
	text: string
	classes?: string
}

const Headline: React.FC<PropsHeadline> = ({ text, classes }) => {
	const [allClassesHeadline, setAllClassesHeadline] = useState<string>(sass.headline)

	useEffect(() => {
		if (!classes) {
			setAllClassesHeadline(sass.headline)

			return
		}

		setAllClassesHeadline(mergeAllClasses([sass.headline], classes))
	}, [classes, setAllClassesHeadline])

	return <h1 className={allClassesHeadline}>{text}</h1>
}

export default Headline
