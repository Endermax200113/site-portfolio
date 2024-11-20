export type DataHeaderLabels = {
	typeLabel: 'hello' | 'name' | 'profession' | undefined
	text: string
}

export const dataHeaderLabels: DataHeaderLabels[] = [
	{
		typeLabel: 'hello',
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
