import React, { HTMLAttributes } from 'react'
import sass from './Label.module.sass'

export interface PropsLabel extends HTMLAttributes<HTMLDivElement> {}

const Label: React.FC<PropsLabel> = ({ ...props }) => {
	return (
		<div className={props.className ?? sass.label} {...props}>
			{props.children}
		</div>
	)
}

export default Label
