import React from 'react'
import scss from './LabelHello.module.scss'
import Label, { PropsLabel } from '../Label'

interface PropsLabelHello extends PropsLabel {}

const LabelHello: React.FC<PropsLabelHello> = () => {
	return <Label className={scss.label}>Здравствуйте! Я</Label>
}

export default LabelHello
