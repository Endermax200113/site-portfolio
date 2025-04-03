import React from 'react'
import sass from './Separator.module.sass'
import Image, { PropsImage } from '@ui/image/Image'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsSeparator extends PropsImage {}

const Separator: React.FC<PropsSeparator> = ({ classWrap, ...props }) => {
	const allClassesWrap: string = mergeAllClasses([sass.wrap], classWrap)

	return <Image url={require('@svg/separator.svg')} classWrap={allClassesWrap} alt='Разделитель' role='separator' {...props} />
}

export default Separator
