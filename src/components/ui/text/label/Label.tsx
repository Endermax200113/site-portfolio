import React, { useEffect, useState } from 'react'
import sass from './Label.module.sass'

interface PropsLabel {
	type: 'welcome' | 'name' | 'profession' | undefined
	children: string
}

const Label: React.FC<PropsLabel> = ({ type, children }) => {
	const [classLabel, setClassLabel] = useState<string>('')

	useEffect(() => {
		switch (type) {
			case 'welcome':
				setClassLabel(sass.hello)
				break
			case 'name':
				setClassLabel(sass.name)
				break
			case 'profession':
				setClassLabel(sass.who)
				break
			case undefined:
			default:
				setClassLabel(sass.usually)
				break
		}
	}, [classLabel, type])

	return type === 'name' ? <strong className={classLabel}>{children}</strong> : <div className={classLabel}>{children}</div>
}

export default Label
