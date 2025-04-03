import React from 'react'
import sass from './LabelWho.module.sass'
import Label, { PropsLabel } from '../Label'

interface PropsLabelWho extends PropsLabel {}

const LabelWho: React.FC<PropsLabelWho> = () => {
	return <Label className={sass.label}>Халласаар Максим</Label>
}

export default LabelWho
