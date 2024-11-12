import { DetailsProject, PreviewProject } from '@helper/portfolio'

export type DataPortfolio = PreviewProject & DetailsProject

//TODO Заполнить все проекты

export const dataPortfolio: DataPortfolio[] = [
	{
		id: 1,
		urlImage: require('@img/portfolio/heading.jpg'),
		name: 'Test 1',
		briefDescription: 'Тестовый проект',
		description: 'Тестовый проект',
		stack: [
			[require('@svg/skills/html.svg'), 'html'],
			[require('@svg/skills/css.svg'), 'css'],
			[require('@svg/skills/ts.svg'), 'ts'],
			[require('@svg/skills/react.svg'), 'react'],
			[require('@svg/skills/sass.svg'), 'sass'],
		],
		resources: [['Перейти на GitHub', 'https://github.com/Endermax200113/site-portfolio']],
	},
	{
		id: 0,
		urlImage: require('@img/portfolio/heading.jpg'),
		name: 'Test 1',
		briefDescription: 'Тестовый проект',
		description: 'Тестовый проект',
		site: 'https://www.example.com/index.php',
		stack: [
			[require('@svg/skills/html.svg'), 'html'],
			[require('@svg/skills/css.svg'), 'css'],
			[require('@svg/skills/ts.svg'), 'TypeScript'],
		],
		resources: [['Перейти на GitHub', 'https://github.com/Endermax200113/site-portfolio']],
	},
]
