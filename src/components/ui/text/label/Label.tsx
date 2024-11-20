import React, { ReactNode } from 'react'
import sass from './Label.module.sass'
import { useClass } from '@hooks/useClass'

interface PropsLabel {
	children: ReactNode
	classes?: string
}

const Label: React.FC<PropsLabel> = ({ children, classes }) => {
	const allClassesLabel = useClass(!classes ? sass.label : '', classes)

	return <div className={allClassesLabel}>{children}</div>
}

export default Label
