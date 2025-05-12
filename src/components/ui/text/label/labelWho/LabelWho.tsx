import React from 'react'
import scss from './LabelWho.module.scss'
import Label, { PropsLabel } from '../Label'

interface PropsLabelWho extends PropsLabel {}

const LabelWho: React.FC<PropsLabelWho> = () => {
	return <Label className={scss.label}>Халласаар Максим</Label>
}

export default LabelWho
