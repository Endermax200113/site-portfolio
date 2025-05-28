import React from 'react'
import scss from './LinkPortfolio.module.scss'
import Link, { PropsLink } from '../Link'

interface PropsLinkPortfolio extends PropsLink {}

const LinkPortfolio: React.FC<PropsLinkPortfolio> = ({ ...props }) => {
	return (
		<Link
			children='Показать все проекты'
			className={scss.link}
			{...props}
		/>
	)
}

export default LinkPortfolio
