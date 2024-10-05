import React, { useEffect, useState } from 'react'
import sass from './About.module.sass'
import Quote from '@ui/quote/Quote'
import Headline from '@ui/text/headline/Headline'
import Separator from '@ui/separator/Separator'
import Activity from './activity/Activity'

interface PropsAbout {}

const About: React.FC<PropsAbout> = () => {
	const [paragraphs, setParagraphs] = useState<string[]>([])

	useEffect(() => {
		const arr: string[] = []

		arr.push('Меня зовут Максим Сергеевич. Я закончил Колледж ПсковГУ по специальности техник-программист и стал выпускником 2022-го года. Однако в 2019 году я понемногу изучал как создаются сайты. И это мне очень сильно понравилось. Также в том году мне предложили вступить команду в веб-студии, и я согласился. Благодаря команде я изучил ещё несколько технологий, что касается frontend-разработки.')

		arr.push('После 2022-го года я всё своё личное время потратил на полное изучение frontend-технологии, такие как фреймворки, языки программирования и прочие. Кроме того я создаю различные программы для десктопных версий. А также изучаю английский язык не только в техническом плане, но и в разговорном.')

		setParagraphs(arr)
	}, [setParagraphs])

	return (
		<section className={sass.about} id='about'>
			<Headline text='Обо мне' classes={sass.headline} />
			<Quote paragraphs={paragraphs} classes={sass.quote} />
			<Separator classes={sass['separator-wrap']} />
			<Activity classes={sass.activity} />
		</section>
	)
}

export default About
