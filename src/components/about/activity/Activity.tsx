import React, { useEffect, useState } from 'react'
import sass from './Activity.module.sass'
import { mergeAllClasses } from '@utils/sassControl'
import ActivityBlock from './activityBlock/ActivityBlock'

interface PropsActivity {
	classes?: string
}

const Activity: React.FC<PropsActivity> = ({ classes }) => {
	const [allClassesActivity, setAllClassesActivity] = useState<string>(sass.activity)
	const [arrDescriptions, setArrDescriptions] = useState<[urlImage: string, title: string, description: string][]>([])

	useEffect(() => {
		if (!classes) {
			setAllClassesActivity(sass.activity)

			return
		}

		const arrDescs: [urlImage: string, title: string, description: string][] = []

		arrDescs.push([require('@img/about/frontend.png'), 'Frontend-разработка', 'Уже как 5 лет я занимаюсь вёрсткой разных кросс-браузерных и семантических сайтов различных сложностей, которые соответствуют строго по макету.'])

		arrDescs.push([require('@img/about/development.png'), 'Программирование', 'Мои любимые языки программирования для десктопных версий - это Java и C#, т.к. мне с ними проще писать. Для упрощения работы я пишу программы для себя.'])

		arrDescs.push([require('@img/about/english.png'), 'Английский язык', 'Т.к. английский язык является международным языком, естественно, в начальной школе я выбрал именно его. Сейчас я изучаю английский язык в разговорном плане.'])

		setAllClassesActivity(mergeAllClasses([sass.activity], classes))
		setArrDescriptions(arrDescs)
	}, [classes, setAllClassesActivity, setArrDescriptions])

	return (
		<div className={allClassesActivity}>
			{arrDescriptions.map(([urlImage, title, description], i) => {
				return (
					<ActivityBlock urlImage={urlImage} title={title} key={i}>
						{description}
					</ActivityBlock>
				)
			})}
		</div>
	)
}

export default Activity
