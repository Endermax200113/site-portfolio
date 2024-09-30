import React from 'react'
import sass from './About.module.sass'

interface PropsAbout {}

const About: React.FC<PropsAbout> = () => {
	return (
		<section className={sass.about} id='about'>
			<h1 className={sass.title}>Обо мне</h1>

			<blockquote className={sass.quote}>
				<p className={sass.description}>Меня зовут Максим Сергеевич. Я закончил Колледж ПсковГУ по специальности техник-программист и стал выпускником 2022-го года. Однако в 2019 году я понемногу изучал как создаются сайты. И это мне очень сильно понравилось. Также в том году мне предложили вступить команду в веб-студии, и я согласился. Благодаря команде я изучил ещё несколько технологий, что касается frontend-разработки.</p>
				<p className={sass.description}>После 2022-го года я всё своё личное время потратил на полное изучение frontend-технологии, такие как фреймворки, языки программирования и прочие. Кроме того я создаю различные программы для десктопных версий. А также изучаю английский язык не только в техническом плане, но и в разговорном.</p>
			</blockquote>

			<div className={sass['separator-wrap']}>
				<img className={sass['separator-img']} src={require('@svg/separator.svg').default} alt='Делитель' />
			</div>

			<div className={sass.activity}>
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
		</section>
	)
}

export default About
