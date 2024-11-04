import React from 'react'
import sass from './Separator.module.sass'
import Image from '@ui/image/Image'
import { useClass } from '@hooks/useClass'

interface PropsSeparator {
	classes?: string
}

const Separator: React.FC<PropsSeparator> = ({ classes }) => {
	const allClassesWrap: string = useClass(sass.wrap, classes)

	return <Image url={require('@svg/separator.svg')} classesWrap={allClassesWrap} alt='Разделитель' />
}

export default Separator
