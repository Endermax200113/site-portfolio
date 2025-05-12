import React, { HTMLAttributes } from 'react'
import scss from './InformationText.module.scss'
import LabelHello from '@ui/text/label/labelHello/LabelHello'
import LabelWho from '@ui/text/label/labelWho/LabelWho'
import LabelProfession from '@ui/text/label/labelProfession/LabelProfession'

interface PropsInformationText extends HTMLAttributes<HTMLDivElement> {}

const InformationText: React.FC<PropsInformationText> = () => {
	return (
		<div className={scss['info-text']}>
			<LabelHello />
			<LabelWho />
			<LabelProfession />
		</div>
	)
}

export default InformationText
