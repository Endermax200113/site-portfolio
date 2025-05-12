import React, { HTMLAttributes } from 'react'
import scss from './Background.module.scss'

interface PropsBackground extends HTMLAttributes<HTMLDivElement> {}

const Background: React.FC<PropsBackground> = () => {
	return (
		<div className={scss.background}>
			<div className={scss.detail} />
			<div className={scss['detail-transition']} />
		</div>
	)
}

export default Background
