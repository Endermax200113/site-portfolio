import React, { forwardRef, RefAttributes } from 'react'
import scss from './About.module.scss'
import Quote from '@ui/quote/Quote'
import Heading from '@ui/text/heading/Heading'
import Separator from '@ui/separator/Separator'
import Activity from './activity/Activity'
import { dataAbout } from '@/data/about'
import DescriptionAbout from '@ui/text/description/descriptionAbout/DescriptionAbout'

interface PropsAbout extends RefAttributes<HTMLElement> {}

const About: React.FC<PropsAbout> = forwardRef<HTMLElement>(({ ...props }, forwardedRef) => {
	return (
		<section
			className={scss.about}
			{...props}
			ref={forwardedRef}>
			<Heading children='Обо мне' />

			<Quote className={scss.quote}>
				{dataAbout.map((paragraph, i) => {
					return <DescriptionAbout key={`description-about-${i}`}>{paragraph}</DescriptionAbout>
				})}
			</Quote>

			<Separator classWrap={scss['separator-wrap']} />
			<Activity className={scss.activity} />
		</section>
	)
})

export default About
