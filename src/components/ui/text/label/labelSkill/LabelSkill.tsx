import React from 'react'
import sass from './LabelSkill.module.sass'
import Label, { PropsLabel } from '../Label'

interface PropsLabelSkill extends PropsLabel {}

const LabelSkill: React.FC<PropsLabelSkill> = ({ children, ...props }) => {
	return (
		<Label className={sass.label} mergeClass {...props}>
			{children}
		</Label>
	)
}

export default LabelSkill
