import React, { useEffect, useState } from 'react'
import sass from './Info.module.sass'
import Label from '@ui/text/label/Label'
import Social from './../social/Social'

interface PropsInfo {}

type TypeLabel = 'welcome' | 'name' | 'profession' | undefined
type Labels = [TypeLabel, string]

const Info: React.FC<PropsInfo> = () => {
	const [arrLabels, setArrLabels] = useState<Labels[]>([])

	useEffect(() => {
		const arr: Labels[] = []

		arr.push(['welcome', 'Здравствуйте! Я'])
		arr.push(['name', 'Халласаар Максим'])
		arr.push(['profession', 'Frontend-разработчик'])

		setArrLabels(arr)
	}, [setArrLabels])

	return (
		<div className={sass.welcome}>
			{arrLabels.map(([type, text], i) => {
				return (
					<Label type={type} key={i}>
						{text}
					</Label>
				)
			})}

			<Social />
		</div>
	)
}

export default Info
