import React, { HTMLAttributes } from 'react'
import scss from './InformationText.module.scss'
import LabelHello from '@ui/text/label/labelHello/LabelHello'
import LabelWho from '@ui/text/label/labelWho/LabelWho'
import LabelProfession from '@ui/text/label/labelProfession/LabelProfession'
import { useAdaptiveSize } from '@hooks/useAdaptiveSize'

interface PropsInformationText extends HTMLAttributes<HTMLDivElement> {}

const InformationText: React.FC<PropsInformationText> = () => {
	const isDesktop: boolean = useAdaptiveSize()

	return (
		<div className={scss['info-text']}>
			{isDesktop && <LabelHello />}
			<LabelWho />
			<LabelProfession />
		</div>
	)
}

export default InformationText
