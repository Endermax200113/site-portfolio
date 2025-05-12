import React from 'react'
import scss from './Separator.module.scss'
import Image, { PropsImage } from '@ui/image/Image'
import { mergeAllClasses } from '@utils/sassControl'

const imgSeparator: string = (await import('@svg/separator.svg')).default

interface PropsSeparator extends PropsImage {}

const Separator: React.FC<PropsSeparator> = ({ classWrap, ...props }) => {
	const allClassesWrap: string = mergeAllClasses([scss.wrap], classWrap)

	return (
		<Image
			url={imgSeparator}
			classWrap={allClassesWrap}
			alt='Разделитель'
			role='separator'
			{...props}
		/>
	)
}

export default Separator
