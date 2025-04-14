import React, { HTMLAttributes } from 'react'
import sass from './Main.module.sass'
import { trimSass } from '@utils/sassControl'

interface PropsRootMain extends HTMLAttributes<HTMLElement> {
	withoutMargin?: boolean
}

const RootMain: React.FC<PropsRootMain> = ({ className, withoutMargin, children, ...props }) => {
	const mainClass: string = !withoutMargin ? sass.main : trimSass(sass, ['main', 'without-margin'])
	const togetherClasses: string = `${mainClass} ${className}`.trim()

	return (
		<main className={togetherClasses} {...props}>
			{children}
		</main>
	)
}

export default RootMain
