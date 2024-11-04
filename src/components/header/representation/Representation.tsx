import React from 'react'
import sass from './Representation.module.sass'
import Image from '@ui/image/Image'
import { dataRepresentation, DataRepresentation } from '@/data/representation'
import { useArray } from '@hooks/useArray'

interface PropsRepresentation {}

const Representation: React.FC<PropsRepresentation> = () => {
	const arrImages: DataRepresentation[] = useArray<DataRepresentation>(() => dataRepresentation)

	return (
		<div className={sass.representation}>
			{arrImages.map(([url, alt], i) => {
				return <Image url={url} alt={alt} classesWrap={sass['wrap']} key={i} />
			})}
		</div>
	)
}

export default Representation
