import React, { useEffect, useState } from 'react'
import sass from './Activity.module.sass'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsActivity {
	classes?: string
}

const Activity: React.FC<PropsActivity> = ({ classes }) => {
	const [allClassesActivity, setAllClassesActivity] = useState<string>(sass.activity)

	useEffect(() => {
		if (!classes) {
			setAllClassesActivity(sass.activity)

			return
		}

		setAllClassesActivity(mergeAllClasses([sass.activity], classes))
	}, [classes, setAllClassesActivity])

	return (
		<div className={allClassesActivity}>
			<div className={sass['activity-block']}>
				<div className={sass['activity-wrap']}>
					<img src={require('@img/about/frontend.png')} alt='Frontend' className={sass['activity-icon']} />
				</div>

				<h2 className={sass['activity-title']}>Frontend-разработка</h2>
				<p className={sass['activity-description']}>Уже как 5 лет я занимаюсь вёрсткой разных кросс-браузерных и семантических сайтов различных сложностей, которые соответствуют строго по макету.</p>
			</div>

			<div className={sass['activity-block']}>
				<div className={sass['activity-wrap']}>
					<img src={require('@img/about/development.png')} alt='Программирование' className={sass['activity-icon']} />
				</div>

				<h2 className={sass['activity-title']}>Программирование</h2>
				<p className={sass['activity-description']}>Мои любимые языки программирования для десктопных версий - это Java и C#, т.к. мне с ними проще писать. Для упрощения работы я пишу программы для себя.</p>
			</div>

			<div className={sass['activity-block']}>
				<div className={sass['activity-wrap']}>
					<img src={require('@img/about/english.png')} alt='Английский язык' className={sass['activity-icon']} />
				</div>

				<h2 className={sass['activity-title']}>Английский язык</h2>
				<p className={sass['activity-description']}>Т.к. английский язык является международным языком, естественно, в начальной школе я выбрал именно его. Сейчас я изучаю английский язык в разговорном плане.</p>
			</div>
		</div>
	)
}

export default Activity
