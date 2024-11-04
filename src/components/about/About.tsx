import React from 'react'
import sass from './About.module.sass'
import Quote from '@ui/quote/Quote'
import Heading from '@ui/text/heading/Heading'
import Separator from '@ui/separator/Separator'
import Activity from './activity/Activity'
import { useArray } from '@hooks/useArray'
import { DataAbout, dataAbout } from '@/data/about'

interface PropsAbout {}

const About: React.FC<PropsAbout> = () => {
	const paragraphs: DataAbout[] = useArray<DataAbout>(() => dataAbout)

	return (
		<section className={sass.about} id='about'>
			<Heading text='Обо мне' classes={sass.heading} />
			<Quote paragraphs={paragraphs} classes={sass.quote} />
			<Separator classes={sass['separator-wrap']} />
			<Activity classes={sass.activity} />
		</section>
	)
}

export default About
