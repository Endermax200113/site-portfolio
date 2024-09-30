import React from 'react'
import sass from './Headline.module.sass'

interface PropsHeadline {
	text: string
}

const Headline: React.FC<PropsHeadline> = ({ text }) => {
	return <h1 className={sass.headline}>{text}</h1>
}

export default Headline
