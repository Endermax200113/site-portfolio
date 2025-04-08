import React, { RefAttributes } from 'react'
import sass from './Link.module.sass'
import { Link, LinkProps } from 'react-router-dom'
import { mergeAllClasses } from '@utils/sassControl'

export interface PropsLink extends LinkProps, RefAttributes<HTMLAnchorElement> {
	mergeClass?: boolean
}

const LinkComponent: React.FC<PropsLink> = ({ mergeClass, className, children, ...props }) => {
	const allClassesLink: string = mergeAllClasses([mergeClass || !className ? sass.link : ''], className)

	return (
		<Link className={allClassesLink} {...props}>
			{children}
		</Link>
	)
}

export default LinkComponent
