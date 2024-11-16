import React, { forwardRef } from 'react'
import sass from './About.module.sass'
import Quote from '@ui/quote/Quote'
import Heading from '@ui/text/heading/Heading'
import Separator from '@ui/separator/Separator'
import Activity from './activity/Activity'
import { useArray } from '@hooks/useArray'
import { DataAbout, dataAbout } from '@/data/about'

interface PropsAbout {
	[props: string]: any
}

const About: React.FC<PropsAbout> = forwardRef<HTMLElement>(({ ...props }, forwardedRef) => {
	const paragraphs: DataAbout[] = useArray<DataAbout>(() => dataAbout)

	return (
		<section className={sass.about} {...props} ref={forwardedRef}>
			<Heading text='Обо мне' classes={sass.heading} />
			<Quote paragraphs={paragraphs} classes={sass.quote} />
			<Separator classes={sass['separator-wrap']} />
			<Activity classes={sass.activity} />
		</section>
	)
})

export default About
