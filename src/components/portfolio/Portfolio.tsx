import React from 'react'
import sass from './Portfolio.module.sass'
import Image from '@ui/image/Image'
import Heading from '@ui/text/heading/Heading'

interface PropsPortfolio {}

const Portfolio: React.FC<PropsPortfolio> = () => {
	return (
		<section id='portfolio' className={sass.portfolio}>
			<div className={sass['image-heading']}>
				<Image url={require('@img/portfolio/heading.jpg')} objectFit='cover' classesWrap={sass['image-wrap']} classesImage={sass.image} />

				<Heading text='Портфолио' classes={sass.heading} />
			</div>

			<div className={sass.projects}></div>
		</section>
	)
}

export default Portfolio
