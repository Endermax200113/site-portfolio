import React, { useEffect, useState } from 'react'
import sass from './Label.module.sass'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsLabel {
	children: string
	type?: 'welcome' | 'name' | 'profession'
	classes?: string
}

const Label: React.FC<PropsLabel> = ({ type, children, classes }) => {
	const [allClassesLabel, setAllClassesLabel] = useState<string>(sass.usually)

	useEffect(() => {
		const spotLabel = (clazz?: string): void => {
			switch (type) {
				case 'welcome':
					setAllClassesLabel(mergeAllClasses([sass.hello], clazz))
					break
				case 'name':
					setAllClassesLabel(mergeAllClasses([sass.name], clazz))
					break
				case 'profession':
					setAllClassesLabel(mergeAllClasses([sass.who], clazz))
					break
				case undefined:
				default:
					setAllClassesLabel(mergeAllClasses([sass.usually], clazz))
					break
			}
		}

		if (!classes) {
			spotLabel()
		} else {
			spotLabel(classes)
		}
	}, [classes, type])

	return type === 'name' ? <strong className={allClassesLabel}>{children}</strong> : <div className={allClassesLabel}>{children}</div>
}

export default Label
