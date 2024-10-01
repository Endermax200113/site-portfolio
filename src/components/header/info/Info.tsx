import React from 'react'
import sass from './Info.module.sass'
import Label from '@ui/text/label/Label'
import Social from './../social/Social'

interface PropsInfo {}

const Info: React.FC<PropsInfo> = () => {
	type TypeLabel = 'welcome' | 'name' | 'profession' | undefined

	const arrLabels: [TypeLabel, string][] = []

	arrLabels.push(['welcome', 'Привет! Я'])
	arrLabels.push(['name', 'Халласаар Максим'])
	arrLabels.push(['profession', 'Frontend-разработчик'])

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
