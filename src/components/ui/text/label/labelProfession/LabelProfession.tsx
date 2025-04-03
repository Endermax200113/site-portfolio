import React from 'react'
import sass from './LabelProfession.module.sass'
import Label, { PropsLabel } from '../Label'

interface PropsLabelProfession extends PropsLabel {}

const LabelProfession: React.FC<PropsLabelProfession> = () => {
	return <Label className={sass.label}>Frontend-разработчик</Label>
}

export default LabelProfession
