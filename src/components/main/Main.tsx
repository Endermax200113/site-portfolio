import React, { HTMLAttributes } from 'react'
import scss from './Main.module.scss'
import { trimSass } from '@utils/sassControl'

export interface PropsRootMain extends HTMLAttributes<HTMLElement> {
	withoutMargin?: boolean
}

const RootMain: React.FC<PropsRootMain> = ({ className, withoutMargin, children, ...props }) => {
	const mainClass: string = !withoutMargin ? scss.main : trimSass(scss, ['main', 'without-margin'])
	const togetherClasses: string = `${mainClass} ${className}`.trim()

	return (
		<main
			className={togetherClasses}
			{...props}>
			{children}
		</main>
	)
}

export default RootMain
