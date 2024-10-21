import React, { useEffect, useState } from 'react'
import sass from './Link.module.sass'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsLink {
	link: string
	text: string
	classes?: string
}

const Link: React.FC<PropsLink> = ({ link, text, classes }) => {
	const [allClassesLink, setAllClassesLink] = useState<string>(sass.link)

	useEffect(() => {
		if (!classes) {
			setAllClassesLink(sass.link)
			return
		}

		setAllClassesLink(mergeAllClasses([sass.link], classes))
	}, [classes, setAllClassesLink])

	return (
		<a href={link} className={allClassesLink}>
			{text}
		</a>
	)
}

export default Link
