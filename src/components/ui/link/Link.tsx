import React from 'react'
import sass from './Link.module.sass'
import { useClass } from '@hooks/useClass'
import { Link } from 'react-router-dom'

interface PropsLink {
	link: string
	text: string
	classes?: string
}

const LinkComponent: React.FC<PropsLink> = ({ link, text, classes }) => {
	const allClassesLink: string = useClass(sass.link, classes)

	return (
		// <a href={link} className={allClassesLink}>
		// 	{text}
		// </a>

		<Link to={link} className={allClassesLink}>
			{text}
		</Link>
	)
}

export default LinkComponent
