import React from 'react'
import sass from './Description.module.sass'
import useClass from '@hooks/useClass'

interface PropsDescription {
	children: string
	classes?: string
}

const Description: React.FC<PropsDescription> = ({ children, classes }) => {
	const allClassesDescription: string = useClass(sass.description, classes)

	return <p className={allClassesDescription}>{children}</p>
}

export default Description
