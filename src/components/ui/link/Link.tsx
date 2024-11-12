import React from 'react'
import sass from './Link.module.sass'
import { useClass } from '@hooks/useClass'

interface PropsLink {
	link: string
	text: string
	classes?: string
}

const LinkComponent: React.FC<PropsLink> = ({ link, text, classes }) => {
	const allClassesLink: string = useClass(sass.link, classes)

	return (
		<a href={link} className={allClassesLink}>
			{text}
		</a>
	)
}

export default LinkComponent
