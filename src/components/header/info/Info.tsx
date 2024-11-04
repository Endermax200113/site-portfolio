import React from 'react'
import sass from './Info.module.sass'
import Label from '@ui/text/label/Label'
import Social from './../social/Social'
import { dataHeaderLabels, DataHeaderLabels } from '@/data/headerInfo'
import { useArray } from '@hooks/useArray'

interface PropsInfo {}

const Info: React.FC<PropsInfo> = () => {
	const arrLabels: DataHeaderLabels[] = useArray<DataHeaderLabels>(() => dataHeaderLabels)

	return (
		<div className={sass.welcome}>
			{arrLabels.map(({ typeLabel, text }, i) => {
				return (
					<Label type={typeLabel} key={i}>
						{text}
					</Label>
				)
			})}

			<Social />
		</div>
	)
}

export default Info
