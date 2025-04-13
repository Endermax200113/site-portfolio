import React from 'react'
import sass from './LabelCopyright.module.sass'
import Label, { PropsLabel } from '../Label'

interface PropsLabelCopyright extends PropsLabel {}

const LabelCopyright: React.FC<PropsLabelCopyright> = ({ ...props }) => {
	return (
		<Label className={sass.label} {...props}>
			<b className={sass.copyright}>&copy; М.С. Халласаар, 2025</b>
		</Label>
	)
}

export default LabelCopyright
