import React, { HTMLAttributeAnchorTarget, ReactNode } from 'react'
import sass from './Link.module.sass'
import { useClass } from '@hooks/useClass'
import { Link } from 'react-router-dom'

interface PropsLink {
	link: string
	text?: string
	children?: ReactNode
	classes?: string
	target?: HTMLAttributeAnchorTarget
}

const LinkComponent: React.FC<PropsLink> = ({ link, text, classes, target, children }) => {
	const allClassesLink: string = useClass(sass.link, classes)

	return (
		<Link to={link} target={target} className={allClassesLink}>
			{text ?? children}
		</Link>
	)
}

export default LinkComponent
