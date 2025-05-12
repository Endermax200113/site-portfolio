import React, { HTMLAttributes } from 'react'
import scss from './Footer.module.scss'
import ButtonFooter from '@ui/button/buttonFooter/ButtonFooter'
import Buttons from './buttons/Buttons'
import LabelCopyright from '@ui/text/label/labelCopyright/LabelCopyright'

interface PropsFooter extends HTMLAttributes<HTMLElement> {}

const Footer: React.FC<PropsFooter> = ({ ...props }) => {
	return (
		<footer
			className={scss.footer}
			{...props}>
			<ButtonFooter />
			<Buttons />
			<LabelCopyright />
		</footer>
	)
}

export default Footer
