export type DataActivity = {
	urlImage: string
	title: string
	description: string
}

export const dataActivity: DataActivity[] = [
	{
		urlImage: (await import('@img/about/frontend.png')).default,
		title: 'Frontend-разработка',
		description: 'Уже как 5 лет я занимаюсь разработкой разных кросс-браузерных и семантических сайтов различных сложностей, которые соответствуют макету.',
	},
	{
		urlImage: (await import('@img/about/development.png')).default,
		title: 'Программирование',
		description: 'Мои любимые языки программирования для десктопных версий ― это Java и C#, т.к. мне с ними проще работать. Для упрощения работы я пишу программы для себя.',
	},
	{
		urlImage: (await import('@img/about/english.png')).default,
		title: 'Английский язык',
		description: 'Так как английский язык является международным, естественно, я решил изучить именно его. Сейчас я учу английский язык в разговорном плане.',
	},
]
