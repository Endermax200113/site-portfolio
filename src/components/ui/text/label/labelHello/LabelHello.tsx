import React from 'react'
import sass from './LabelHello.module.sass'
import Label, { PropsLabel } from '../Label'

interface PropsLabelHello extends PropsLabel {}

const LabelHello: React.FC<PropsLabelHello> = () => {
	return <Label className={sass.label}>Здравствуйте! Я</Label>
}

export default LabelHello
