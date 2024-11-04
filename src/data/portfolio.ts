import { OneProject } from '@helper/portfolio'

export type DataPortfolio = OneProject

//TODO Заполнить все проекты

export const dataPortfolio: DataPortfolio[] = [
	{
		urlImage: require('@img/portfolio/heading.jpg'),
		name: 'Test 1',
		description: 'Тестовый проект',
		details: 'url',
	},
	{
		urlImage: require('@img/portfolio/heading.jpg'),
		name: 'Test 1',
		description: 'Тестовый проект',
		details: 'url',
		site: 'https://www.example.com/index.php',
	},
]
