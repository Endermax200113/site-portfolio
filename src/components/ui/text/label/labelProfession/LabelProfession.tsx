import React from 'react'
import scss from './LabelProfession.module.scss'
import Label, { PropsLabel } from '../Label'

interface PropsLabelProfession extends PropsLabel {}

const LabelProfession: React.FC<PropsLabelProfession> = () => {
	return <Label className={scss.label}>Frontend-разработчик</Label>
}

export default LabelProfession
