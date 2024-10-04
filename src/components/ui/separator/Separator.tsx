import React, { useEffect, useState } from 'react'
import sass from './Separator.module.sass'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsSeparator {
	classes?: string
}

const Separator: React.FC<PropsSeparator> = ({ classes }) => {
	const [allClassesWrap, setAllClassesWrap] = useState<string>(sass.wrap)

	useEffect(() => {
		if (!classes) {
			setAllClassesWrap(sass.wrap)

			return
		}

		setAllClassesWrap(mergeAllClasses([sass.wrap], classes))
	}, [classes, setAllClassesWrap])

	return (
		<div className={allClassesWrap}>
			<img className={sass.img} src={require('@svg/separator.svg').default} alt='Разделитель' />
		</div>
	)
}

export default Separator
