import React, { ReactNode } from 'react'
import sass from './Main.module.sass'
import { trimSass } from '@utils/sassControl'

interface PropsRootMain {
	classes: string
	children: ReactNode
	withoutMargin?: boolean
}

const RootMain: React.FC<PropsRootMain> = ({ classes, withoutMargin, children }) => {
	const mainClass: string = !withoutMargin ? sass.main : trimSass(sass, ['main', 'without-margin'])
	const togetherClasses: string = `${mainClass} ${classes}`

	return <main className={togetherClasses}>{children}</main>
}

export default RootMain
