import React from 'react'
import sass from './LinkPortfolio.module.sass'
import Link, { PropsLink } from '../Link'

interface PropsLinkPortfolio extends PropsLink {}

const LinkPortfolio: React.FC<PropsLinkPortfolio> = ({ ...props }) => {
	return <Link children='Показать все проекты' className={sass.link} {...props} />
}

export default LinkPortfolio
