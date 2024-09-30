import React from 'react'
import sass from './Headline.module.sass'

interface PropsHeadline {}

const Headline: React.FC<PropsHeadline> = () => {
	return <h1 className={sass.headline}></h1>
}

export default Headline
