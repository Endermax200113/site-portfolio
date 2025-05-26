import React from 'react'
import scss from './LabelWho.module.scss'
import Label, { PropsLabel } from '../Label'
import { useAdaptiveSize } from '@hooks/useAdaptiveSize'

interface PropsLabelWho extends PropsLabel {}

const LabelWho: React.FC<PropsLabelWho> = () => {
	const isDesktop: boolean = useAdaptiveSize()

	return <Label className={scss.label}>{isDesktop ? 'Халласаар Максим' : 'Меня зовут Макс'}</Label>
}

export default LabelWho
