export type DataHeaderLabels = {
	typeLabel: 'welcome' | 'name' | 'profession' | undefined
	text: string
}

export const dataHeaderLabels: DataHeaderLabels[] = [
	{
		typeLabel: 'welcome',
		text: 'Здравствуйте! Я',
	},
	{
		typeLabel: 'name',
		text: 'Халласаар Максим',
	},
	{
		typeLabel: 'profession',
		text: 'Frontend-разработчик',
	},
]
