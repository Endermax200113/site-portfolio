import React, { forwardRef, RefAttributes } from 'react'
import sass from './About.module.sass'
import Quote from '@ui/quote/Quote'
import Heading from '@ui/text/heading/Heading'
import Separator from '@ui/separator/Separator'
import Activity from './activity/Activity'
import { dataAbout } from '@/data/about'
import DescriptionAbout from '@ui/text/description/descriptionAbout/DescriptionAbout'

interface PropsAbout extends RefAttributes<HTMLElement> {
	[props: string]: any
}

const About: React.FC<PropsAbout> = forwardRef<HTMLElement>(({ ...props }, forwardedRef) => {
	return (
		<section className={sass.about} {...props} ref={forwardedRef}>
			<Heading children='Обо мне' className={sass.heading} mergeClass />

			<Quote className={sass.quote}>
				{dataAbout.map((paragraph, i) => {
					return <DescriptionAbout key={`description-about-${i}`}>{paragraph}</DescriptionAbout>
				})}
			</Quote>

			<Separator classWrap={sass['separator-wrap']} />
			<Activity className={sass.activity} />
		</section>
	)
})

export default About
