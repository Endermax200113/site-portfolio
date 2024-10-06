import React, { useEffect, useState } from 'react'
import sass from './Representation.module.sass'
import Image from '@ui/image/Image'

interface PropsRepresentation {}

type ForArrImages = [url: string, alt: string]

const Representation: React.FC<PropsRepresentation> = () => {
	const [arrImages, setArrImages] = useState<ForArrImages[]>([])

	useEffect(() => {
		const arr: ForArrImages[] = []

		arr.push([require('@img/header/smartphone.png'), 'Смартфон'])
		arr.push([require('@img/header/tablet.png'), 'Планшет'])
		arr.push([require('@img/header/pc.png'), 'Компьютер'])
		arr.push([require('@img/header/laptop.png'), 'Ноутбук'])

		setArrImages(arr)
	}, [setArrImages])

	return (
		<div className={sass.representation}>
			{arrImages.map(([url, alt], i) => {
				return <Image url={url} alt={alt} classesWrap={sass['wrap']} key={i} />
			})}
		</div>
	)
}

export default Representation
