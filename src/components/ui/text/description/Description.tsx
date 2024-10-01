import React from 'react'
import sass from './Description.module.sass'

interface PropsDescription {
	children: string
}

const Description: React.FC<PropsDescription> = ({ children }) => {
	return <p className={sass.description}>{children}</p>
}

export default Description
