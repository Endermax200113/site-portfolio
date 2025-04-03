import React, { forwardRef, RefAttributes } from 'react'
import sass from './About.module.sass'
import Quote from '@ui/quote/Quote'
import Heading from '@ui/text/heading/Heading'
import Separator from '@ui/separator/Separator'
import Activity from './activity/Activity'
import { DataAbout, dataAbout } from '@/data/about'

interface PropsAbout extends RefAttributes<HTMLElement> {
	[props: string]: any
}

const About: React.FC<PropsAbout> = forwardRef<HTMLElement>(({ ...props }, forwardedRef) => {
	const paragraphs: DataAbout[] = dataAbout

	return (
		<section className={sass.about} {...props} ref={forwardedRef}>
			<Heading children='Обо мне' className={sass.heading} mergeClass />
			<Quote paragraphs={paragraphs} classes={sass.quote} />
			<Separator classes={sass['separator-wrap']} />
			<Activity classes={sass.activity} />
		</section>
	)
})

export default About
