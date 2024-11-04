import React from 'react'
import sass from './Link.module.sass'
import { useClass } from '@hooks/useClass'

interface PropsLink {
	link: string
	text: string
	classes?: string
}

const Link: React.FC<PropsLink> = ({ link, text, classes }) => {
	const allClassesLink: string = useClass(sass.link, classes)

	return (
		<a href={link} className={allClassesLink}>
			{text}
		</a>
	)
}

export default Link
