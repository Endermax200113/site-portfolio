import React, { RefAttributes } from 'react'
import scss from './Link.module.scss'
import { Link, LinkProps } from 'react-router-dom'
import { mergeAllClasses } from '@utils/sassControl'

export interface PropsLink extends LinkProps, RefAttributes<HTMLAnchorElement> {
	mergeClass?: boolean
}

const LinkComponent: React.FC<PropsLink> = ({ mergeClass, className, children, ...props }) => {
	const allClassesLink: string = mergeAllClasses([mergeClass || !className ? scss.link : ''], className)

	return (
		<Link
			className={allClassesLink}
			{...props}>
			{children}
		</Link>
	)
}

export default LinkComponent
