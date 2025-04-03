import React, { HTMLAttributes } from 'react'
import sass from './Background.module.sass'

interface PropsBackground extends HTMLAttributes<HTMLDivElement> {}

const Background: React.FC<PropsBackground> = () => {
	return (
		<div className={sass.background}>
			<div className={sass.detail}></div>
			<div className={sass['detail-transition']}></div>
		</div>
	)
}

export default Background
