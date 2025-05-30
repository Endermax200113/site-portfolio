import React, { HTMLAttributes } from 'react'
import scss from './Footer.module.scss'
import ButtonFooter from '@ui/button/button-footer/ButtonFooter'
import Buttons from './buttons/Buttons'
import LabelCopyright from '@ui/text/label/label-copyright/LabelCopyright'

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
