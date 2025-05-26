import React from 'react'
import scss from './LabelProfession.module.scss'
import Label, { PropsLabel } from '../Label'
import { useAdaptiveSize } from '@hooks/useAdaptiveSize'

interface PropsLabelProfession extends PropsLabel {}

const LabelProfession: React.FC<PropsLabelProfession> = () => {
	const isDesktop: boolean = useAdaptiveSize()

	return <Label className={scss.label}>{isDesktop ? 'Frontend-разработчик' : 'Я web-разработчик'}</Label>
}

export default LabelProfession
