import React, { useEffect, useState } from 'react'
import sass from './Separator.module.sass'
import { mergeAllClasses } from '@utils/sassControl'
import Image from '@ui/image/Image'

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

	return <Image url={require('@svg/separator.svg')} classesWrap={allClassesWrap} alt='Разделитель' />
}

export default Separator
