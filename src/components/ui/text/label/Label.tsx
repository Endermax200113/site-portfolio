import React, { useEffect, useState } from 'react'
import sass from './Label.module.sass'
import { TypeInfo } from '@helper/typeWelcome'

interface PropsLabel {
	type: TypeInfo
	children: string
}

const Label: React.FC<PropsLabel> = ({ type, children }) => {
	const [classLabel, setClassLabel] = useState<string>('')

	useEffect(() => {
		switch (type) {
			case TypeInfo.WELCOME:
				setClassLabel(sass.hello)
				break
			case TypeInfo.NAME:
				setClassLabel(sass.name)
				break
			case TypeInfo.PROFESSION:
				setClassLabel(sass.who)
				break
			case TypeInfo.USUALLY:
			default:
				break
		}
	}, [classLabel, type])

	return type === TypeInfo.NAME ? <strong className={classLabel}>{children}</strong> : <div className={classLabel}>{children}</div>
}

export default Label
