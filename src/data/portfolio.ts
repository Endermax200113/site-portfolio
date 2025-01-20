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
		gallery: [
			{
				id: 0,
				urlImage: require('@img/portfolio/test/1Happy.png'),
				title: '1 случай',
				description: 'oWI < wW && oHI > hW',
			},
			{
				id: 1,
				urlImage: require('@img/portfolio/test/2Happy.png'),
				title: '2 случай',
				description: 'oWI < wW && oHI = hW',
			},
			{
				id: 2,
				urlImage: require('@img/portfolio/test/3Happy.png'),
				title: '3 случай',
				description: 'oWI < wW && oHI < hW',
			},
			{
				id: 3,
				urlImage: require('@img/portfolio/test/4Happy.png'),
				title: '4 случай',
				description: 'oWI > wW && oHI > hW && oHI > bHI',
			},
			{
				id: 4,
				urlImage: require('@img/portfolio/test/5Happy.png'),
				title: '5 случай',
				description: 'oWI > wW && oHI > hW && oHI = bHI',
			},
			{
				id: 5,
				urlImage: require('@img/portfolio/test/6Happy.png'),
				title: '6 случай',
				description: 'oWI > wW && oHI > hW && oHI < bHI',
			},
			{
				id: 6,
				urlImage: require('@img/portfolio/test/7Happy.png'),
				title: '7 случай',
				description: 'oWI > wW && oHI = hW',
			},
			{
				id: 7,
				urlImage: require('@img/portfolio/test/8Happy.png'),
				title: '8 случай',
				description: 'oWI > wW && oHI < hW',
			},
			{
				id: 8,
				urlImage: require('@img/portfolio/test/9Happy.png'),
				title: '9 случай',
				description: 'oWI = wW && oHI > hW',
			},
			{
				id: 9,
				urlImage: require('@img/portfolio/test/10Happy.png'),
				title: '10 случай',
				description: 'oWI = wW && oHI = hW',
			},
			{
				id: 10,
				urlImage: require('@img/portfolio/test/11Happy.png'),
				title: '11 случай',
				description: 'oWI = wW && oHI < hW',
			},
		],
	},
	{
		id: 0,
		urlImage: require('@img/portfolio/projects/psylab/image.png'),
		name: 'Psylab Cinema',
		briefDescription: 'Это командный учебный проект для колледжа, разработанный во время 3-го курса, который разработан в мае 2021 года. Цель: разработать сайт, показать свои навыки из всего изученного. Этот сайт ранее являлся статическим, т.к. он выложен на GitHub Pages.',
		description: 'Это сайт представляет собой кинотеатр, в котором описывает все плюсы, почему выбрать этот кинотеатр. Кроме того, на главной страницы показывают все франшизы, которые показывают в кинотеатре, а также отзывы людей. На странице "О нас" также показывает плюсы кинотеатра, в котором описывают про комфортную атмосферу, про кинобар, про красоту, а также указывает местоположение кинотеатра. На странице "Портфолио" указаны только знаменитые личности, которые выступали.',
		stack: [
			[require('@svg/skills/html.svg'), 'html'],
			[require('@svg/skills/css.svg'), 'css'],
			[require('@svg/skills/sass.svg'), 'sass'],
			[require('@svg/skills/js.svg'), 'JavaScript'],
			[require('@svg/skills/jquery.svg'), 'jQuery'],
		],
		gallery: [
			{
				id: 0,
				urlImage: require('@img/portfolio/projects/psylab/main.png'),
				title: 'Главная страница',
				description: 'На главной странице отображены все плюсы кинотеатра, франшизы, а также отзывы.',
			},
			{
				id: 1,
				urlImage: require('@img/portfolio/projects/psylab/about.png'),
				title: 'О нас',
				description: 'На странице "О нас" показывает, почему лучше посетить этот кинотеатр.',
			},
			{
				id: 2,
				urlImage: require('@img/portfolio/projects/psylab/portfolio.png'),
				title: 'Портфолио',
				description: 'На странице "Портфолио" отображены личности, которые выступали (не спрашиваете, почему так).',
			},
		],
		resources: [['Перейти на GitHub (использовался как хостинг)', 'https://github.com/Endermax200113/psylabcinema']],
	},
]
