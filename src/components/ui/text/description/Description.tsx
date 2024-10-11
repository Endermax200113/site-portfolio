import React, { useEffect, useState } from 'react'
import sass from './Description.module.sass'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsDescription {
	children: string
	classes?: string
}

const Description: React.FC<PropsDescription> = ({ children, classes }) => {
	const [allClassesDescription, setAllClassesDescription] = useState<string>(sass.description)

	useEffect(() => {
		if (!classes) {
			setAllClassesDescription(sass.description)
			return
		}

		setAllClassesDescription(mergeAllClasses([sass.description], classes))
	}, [classes, setAllClassesDescription])

	return <p className={allClassesDescription}>{children}</p>
}

export default Description
