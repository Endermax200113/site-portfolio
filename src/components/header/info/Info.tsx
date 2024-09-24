import React from 'react'
import sass from './Info.module.sass'
import Label from '@ui/text/label/Label'
import Social from './../social/Social'

interface PropsInfo {}

const Info: React.FC<PropsInfo> = () => {
	return (
		<div className={sass.welcome}>
			<Label type='welcome'>Привет! Я</Label>
			<Label type='name'>Халласаар Максим</Label>
			<Label type='profession'>Frontend-разработчик</Label>

			<Social />
		</div>
	)
}

export default Info
