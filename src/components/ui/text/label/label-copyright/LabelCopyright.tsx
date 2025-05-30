import React from 'react'
import scss from './LabelCopyright.module.scss'
import Label, { PropsLabel } from '../Label'

interface PropsLabelCopyright extends PropsLabel {}

const LabelCopyright: React.FC<PropsLabelCopyright> = ({ ...props }) => {
	return (
		<Label
			className={scss.label}
			{...props}>
			<b className={scss.copyright}>&copy; М.С. Халласаар, 2025</b>
		</Label>
	)
}

export default LabelCopyright
