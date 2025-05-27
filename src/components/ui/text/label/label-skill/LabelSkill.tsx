import React from 'react'
import scss from './LabelSkill.module.scss'
import Label, { PropsLabel } from '../Label'

interface PropsLabelSkill extends PropsLabel {}

const LabelSkill: React.FC<PropsLabelSkill> = ({ children, ...props }) => {
	return (
		<Label
			className={scss.label}
			mergeClass
			{...props}>
			{children}
		</Label>
	)
}

export default LabelSkill
