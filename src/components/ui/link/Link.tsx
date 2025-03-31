import React, { HTMLAttributeAnchorTarget } from 'react'
import sass from './Link.module.sass'
import { useClass } from '@hooks/useClass'
import { Link } from 'react-router-dom'

interface PropsLink {
	link: string
	text: string
	classes?: string
	target?: HTMLAttributeAnchorTarget
}

const LinkComponent: React.FC<PropsLink> = ({ link, text, classes, target }) => {
	const allClassesLink: string = useClass(sass.link, classes)

	return (
		<Link to={link} target={target} className={allClassesLink}>
			{text}
		</Link>
	)
}

export default LinkComponent
