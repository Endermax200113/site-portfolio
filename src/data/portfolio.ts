import { DetailsProject, PreviewProject } from '@helper/portfolio'

export type DataPortfolio = PreviewProject & DetailsProject

// DONE Проекты заполнены
// [x] PsyLab Cinema
// [x] TECH-WORLD
// [x] Сайт программиста
// [x] Кофейная коза
// [x] Markethink

export const dataPortfolio: DataPortfolio[] = [
	{
		id: 4,
		urlImage: (await import('@img/portfolio/projects/markethink/image.png')).default,
		name: 'Markethink',
		briefDescription: "Для изучения Bootstrap'а 5 я взял этот макет и решил его сверстать. Сайт был разработан в 2023 году.",
		description: 'Я решил взять макет, в котором имелась одна страница на этот сайт. Был взят фреймворк Bootstrap 5. Вместо обычного HTML я решил взять язык Pug для упрощения написания кода. Кроме этого сайт построен по принципу БЭМа. Также использован программный инструмент Gulp. Свёрстан строго по макету, используя плагин PixelPerfect.',
		stack: [
			[(await import('@svg/skills/pug.svg')).default, 'Pug'],
			[(await import('@svg/skills/sass.svg')).default, 'SASS'],
			[(await import('@svg/skills/js.svg')).default, 'JavaScript'],
			[(await import('@svg/skills/gulp.svg')).default, 'Gulp'],
			[(await import('@svg/skills/git.svg')).default, 'Git'],
		],
		gallery: [
			{
				id: 0,
				urlImage: (await import('@img/portfolio/projects/markethink/1.png')).default,
				title: 'Представление',
				description: 'На заднем плане отображён зелёный фон с кубиками. Сверху отображён хедер с навигацией. По середине компания кратко описывает о себе.',
			},
			{
				id: 1,
				urlImage: (await import('@img/portfolio/projects/markethink/2.png')).default,
				title: 'Агенство',
				description: 'Сверху отображаются какие компании пользуются услугами. Ниже рассказывают, что они - стратегическое агенство. Справа написаны плюсы, почему именно они.',
			},
			{
				id: 2,
				urlImage: (await import('@img/portfolio/projects/markethink/3.png')).default,
				title: 'Контент',
				description: 'Здесь описываются, что они используют свою сеть для того, чтобы продвинуть контент в разных социальных сетях.',
			},
			{
				id: 3,
				urlImage: (await import('@img/portfolio/projects/markethink/4.png')).default,
				title: 'Помощь',
				description: 'Тут рассказывают, как поэтапно будут помогать.',
			},
			{
				id: 4,
				urlImage: (await import('@img/portfolio/projects/markethink/5.png')).default,
				title: 'Блоги',
				description: 'Кроме этого они размещают свои блоги на разные темы.',
			},
			{
				id: 5,
				urlImage: (await import('@img/portfolio/projects/markethink/6.png')).default,
				title: 'Подписка',
				description: 'В этой форме потребуется указать только почту для того, чтобы приходили рассылки.',
			},
			{
				id: 6,
				urlImage: (await import('@img/portfolio/projects/markethink/7.png')).default,
				title: 'Футер',
				description: 'В этом футуре отображаются следующее: слева кратко описано, что они делают; правее - навигационное меню, услуги и компания. Ниже написан копирайт.',
			},
		],
		resources: [
			{
				image: (await import('@img/social/github.png')).default,
				text: 'Перейти на GitHub',
				url: 'https://github.com/Endermax200113/markethink',
			},
		],
	},
	{
		id: 3,
		urlImage: (await import('@img/portfolio/projects/coffeegoat/image.jpg')).default,
		name: 'Кофейная коза',
		briefDescription: 'Кофейная коза - это заведение во Пскове, в котором люди могут выпить кофе на свой вкус. Сайт разработан в 2021 году.',
		description: 'Сайт разработан в 2021 году по реальному заказу командой "КакВариант". Был использован программный инструмент Gulp и свёрстан строго по макету. Сайт-визитка является одностраничным.',
		stack: [
			[(await import('@svg/skills/html.svg')).default, 'HTML'],
			[(await import('@svg/skills/sass.svg')).default, 'SASS'],
			[(await import('@svg/skills/js.svg')).default, 'JavaScript'],
			[(await import('@svg/skills/jquery.svg')).default, 'jQuery'],
			[(await import('@svg/skills/gulp.svg')).default, 'Gulp'],
		],
		gallery: [
			{
				id: 0,
				urlImage: (await import('@img/portfolio/projects/coffeegoat/1.png')).default,
				title: 'Представление',
				description: 'На заднем фоне отображается анимированное видео, в котором исходит пар от кофе. Кроме этого написаны тексты, а также кнопка с бронированием.',
			},
			{
				id: 1,
				urlImage: (await import('@img/portfolio/projects/coffeegoat/2.png')).default,
				title: 'Бронирование',
				description: 'Модальное окно, который предлагает в каком месте забронировать, а после чего позвонить.',
			},
			{
				id: 2,
				urlImage: (await import('@img/portfolio/projects/coffeegoat/3.png')).default,
				title: 'Социальные сети',
				description: 'На заднем плане анимированно на каждой линии справа налево передвигаются изображения, на котором отображены сотрудники этого заведения и не только. Кроме того, снизу отображены две кнопки, в котором можно было переходить на социальные сети.',
			},
			{
				id: 3,
				urlImage: (await import('@img/portfolio/projects/coffeegoat/4.png')).default,
				title: 'Отзывы',
				description: 'Тут отображаются отзывы с 4-ёх сайтов, в котором ставят оценку по 5-балльной шкале и сам же отзыв.',
			},
			{
				id: 4,
				urlImage: (await import('@img/portfolio/projects/coffeegoat/5.png')).default,
				title: 'Меню',
				description: 'Здесь отображается меню, в каждом списке котором имеются названия напитков и их цен. При наведении мыши отображается описание определённой напитки.',
			},
			{
				id: 5,
				urlImage: (await import('@img/portfolio/projects/coffeegoat/6.png')).default,
				title: 'Места',
				description: 'В этом разделе отображаются места и их адреса. Также имеются кнопки, в котором прокладываются маршруты к их месту.',
			},
			{
				id: 6,
				urlImage: (await import('@img/portfolio/projects/coffeegoat/7.png')).default,
				title: 'Футер',
				description: 'В футере написана цитата Коко Шанеля, а также снизу указан копирайт, команда которой разработала этот сайт.',
			},
			{
				id: 7,
				urlImage: (await import('@img/portfolio/projects/coffeegoat/8.png')).default,
				title: 'Мобильная версия',
				description: 'В мобильной версии меняется представление: меняется фон, а сверху появился хедер, в котором можно нажать на меню сайта.',
			},
			{
				id: 8,
				urlImage: (await import('@img/portfolio/projects/coffeegoat/9.png')).default,
				title: 'Мобильная версия',
				description: 'Это модальное окно в мобильной версии для бронирования столика. Здесь просто нажимаются на картинки.',
			},
		],
		resources: [
			{
				image: (await import('@img/social/github.png')).default,
				text: 'Перейти на GitHub',
				url: 'https://github.com/Endermax200113/coffeegoat.ru',
			},
		],
	},
	{
		id: 2,
		urlImage: (await import('@img/portfolio/projects/programmers-website/image.jpg')).default,
		name: 'Сайт программиста',
		briefDescription: 'Для изучения фреймворка Vue я решил взять этот макет посложнее. Она была полностью разработана в 2023 году.',
		description: 'Этот сайт разработан по фреймворку Vue, а также использована технология Vuex, поэтому я взял макет, который будет иметь многостраничный сайт. Кроме этого, сайт разработан по принципу БЭМа и свёрстан строго по макету, используя плагин PixelPerfect в браузере.',
		stack: [
			[(await import('@svg/skills/html.svg')).default, 'HTML'],
			[(await import('@svg/skills/sass.svg')).default, 'SASS'],
			[(await import('@svg/skills/js.svg')).default, 'JavaScript'],
			[(await import('@svg/skills/vue.svg')).default, 'Vue'],
			[(await import('@svg/skills/vuex.svg')).default, 'Vuex'],
			[(await import('@svg/skills/git.svg')).default, 'Git'],
		],
		gallery: [
			{
				id: 0,
				urlImage: (await import('@img/portfolio/projects/programmers-website/1.png')).default,
				title: 'Главная страница',
				description: 'На главной странице отображены хедер с навигацией и с поиском, сторис, форма для публикации статьи и написанные статьи. Сайдбар виден на всех страницах.',
			},
			{
				id: 1,
				urlImage: (await import('@img/portfolio/projects/programmers-website/2.png')).default,
				title: 'Главная страница',
				description: 'Это конец главной страницы, которые отображены статьи и пагинация.',
			},
			{
				id: 2,
				urlImage: (await import('@img/portfolio/projects/programmers-website/3.png')).default,
				title: 'Результаты поиска',
				description: 'Это страница с результатами поиска. Статьи отображены как заглушки.',
			},
			{
				id: 3,
				urlImage: (await import('@img/portfolio/projects/programmers-website/4.png')).default,
				title: 'Портфолио',
				description: 'На этой странице отображено портфолио программиста, которые он разрабатывал.',
			},
			{
				id: 4,
				urlImage: (await import('@img/portfolio/projects/programmers-website/5.png')).default,
				title: 'Профиль',
				description: 'Если точнее сказать - это редактор профиля, в котором можно поменять имя вместе с фамилией, почту, пароль и аватар.',
			},
			{
				id: 5,
				urlImage: (await import('@img/portfolio/projects/programmers-website/6.png')).default,
				title: 'Модальное окно',
				description: 'Чтобы появилась модальное окно, достаточно нажать на кнопку "Написать мне" на сайдбаре. Здесь заполняется форма, в котором указывается имя вместе с фамилией, почта и текст. Кроме этого снизу указаны контактные данные, с помощью которого можно с ним связаться.',
			},
			{
				id: 6,
				urlImage: (await import('@img/portfolio/projects/programmers-website/7.png')).default,
				title: 'Начало статьи',
				description: 'На этой странице отображено ссылочные тексты "Вернуться назад" и "Поделиться", заголовок статьи, дата написания статьи, теги и сама же статья.',
			},
			{
				id: 7,
				urlImage: (await import('@img/portfolio/projects/programmers-website/8.png')).default,
				title: 'Конец статьи',
				description: 'Здесь отображены конец статьи, рекомендация, форма для написания комментария и комментарии, которые написали люди.',
			},
			{
				id: 8,
				urlImage: (await import('@img/portfolio/projects/programmers-website/9.png')).default,
				title: 'Авторизация',
				description: 'Тут отображена только сама форма регистрации.',
			},
			{
				id: 9,
				urlImage: (await import('@img/portfolio/projects/programmers-website/10.png')).default,
				title: 'Мобильная версия',
				description: 'Здесь отображён сайдбар под мобильной версии.',
			},
		],
		resources: [
			{
				image: (await import('@img/social/github.png')).default,
				text: 'Перейти на GitHub',
				url: 'https://github.com/Endermax200113/website-of-programmers',
			},
		],
	},
	{
		id: 1,
		urlImage: (await import('@img/portfolio/projects/tech-world/image.png')).default,
		name: 'Tech-World',
		briefDescription: 'Для улучшения навыков взял макет из интернета для практики и сверстал этот замечательный сайт в 2022 году.',
		description: 'Взял макет в интернете, было интересно сверстать сайт аж сразу на 5 тем, один из которых является тёмный. Сайт разработан по принципу БЭМа. Поскольку сайт является одностраничным, было принято решение использовать программный инструмент как Gulp. Свёрстан строго по макету, используя плагин PixelPerfect в браузере.',
		stack: [
			[(await import('@svg/skills/html.svg')).default, 'HTML'],
			[(await import('@svg/skills/sass.svg')).default, 'SCSS'],
			[(await import('@svg/skills/js.svg')).default, 'JavaScript'],
			[(await import('@svg/skills/jquery.svg')).default, 'jQuery'],
			[(await import('@svg/skills/gulp.svg')).default, 'Gulp'],
			[(await import('@svg/skills/git.svg')).default, 'Git'],
		],
		gallery: [
			{
				id: 0,
				urlImage: (await import('@img/portfolio/projects/tech-world/1.png')).default,
				title: 'Хедер и представление сайта',
				description: 'Здесь коротко рассказывают, кто они из себя представляют.',
			},
			{
				id: 1,
				urlImage: (await import('@img/portfolio/projects/tech-world/2.png')).default,
				title: 'О нас',
				description: 'Тут рассказывают, почему с ними выгодно работать и рассказывают свои плюсы.',
			},
			{
				id: 2,
				urlImage: (await import('@img/portfolio/projects/tech-world/3.png')).default,
				title: 'Стратегия и дизайн',
				description: 'Компания рассказывает свои стратегические инженерии и дизайн для интернациональных топовых брендов.',
			},
			{
				id: 3,
				urlImage: (await import('@img/portfolio/projects/tech-world/4.png')).default,
				title: 'Великолепная команда',
				description: 'Также хвастаются, что они работают с великолепной командой.',
			},
			{
				id: 4,
				urlImage: (await import('@img/portfolio/projects/tech-world/5.png')).default,
				title: 'Портфолио и обратная связь',
				description: 'В первой секции можно увидеть, какие сайты разработали. Во второй секции - обратная связь, где заполняют форму.',
			},
			{
				id: 5,
				urlImage: (await import('@img/portfolio/projects/tech-world/6.png')).default,
				title: 'Футер сайта',
				description: 'В этом футере отображаются навигация, социальные сети, о них, а также короткие описание и примечание.',
			},
			{
				id: 6,
				urlImage: (await import('@img/portfolio/projects/tech-world/7.png')).default,
				title: 'Тёмная тема',
				description: 'Здесь отображается сайт с включённой тёмной темы.',
			},
			{
				id: 7,
				urlImage: (await import('@img/portfolio/projects/tech-world/8.png')).default,
				title: 'Третья тема',
				description: 'Включена 3-я тема сайта.',
			},
			{
				id: 8,
				urlImage: (await import('@img/portfolio/projects/tech-world/9.png')).default,
				title: 'Четвёртая тема',
				description: 'Включена 4-ая тема сайта.',
			},
			{
				id: 9,
				urlImage: (await import('@img/portfolio/projects/tech-world/10.png')).default,
				title: 'Пятая тема',
				description: 'Включена 5-ая тема сайта.',
			},
		],
		resources: [
			{
				image: (await import('@img/social/github.png')).default,
				text: 'Перейти на GitHub',
				url: 'https://github.com/Endermax200113/tech-world',
			},
		],
	},
	{
		id: 0,
		urlImage: (await import('@img/portfolio/projects/psylab/image.png')).default,
		name: 'Psylab Cinema',
		briefDescription: 'Это командный учебный проект для колледжа, разработанный во время 3-го курса, который разработан в мае 2021 года. Цель: разработать сайт, показать свои навыки из всего изученного. Этот сайт ранее являлся статическим, т.к. он выложен на GitHub Pages.',
		description: 'Это сайт представляет собой кинотеатр, в котором описывает все плюсы, почему выбрать этот кинотеатр. Кроме того, на главной страницы показывают все франшизы, которые показывают в кинотеатре, а также отзывы людей. На странице "О нас" также показывает плюсы кинотеатра, в котором описывают про комфортную атмосферу, про кинобар, про красоту, а также указывает местоположение кинотеатра. На странице "Портфолио" указаны только знаменитые личности, которые выступали.',
		stack: [
			[(await import('@svg/skills/html.svg')).default, 'html'],
			[(await import('@svg/skills/sass.svg')).default, 'sass'],
			[(await import('@svg/skills/js.svg')).default, 'JavaScript'],
			[(await import('@svg/skills/jquery.svg')).default, 'jQuery'],
			[(await import('@svg/skills/gulp.svg')).default, 'Gulp'],
			[(await import('@svg/skills/git.svg')).default, 'git'],
		],
		gallery: [
			{
				id: 0,
				urlImage: (await import('@img/portfolio/projects/psylab/main.png')).default,
				title: 'Главная страница',
				description: 'На главной странице отображены все плюсы кинотеатра, франшизы, а также отзывы.',
			},
			{
				id: 1,
				urlImage: (await import('@img/portfolio/projects/psylab/about.png')).default,
				title: 'О нас',
				description: 'На странице "О нас" показывает, почему лучше посетить этот кинотеатр.',
			},
			{
				id: 2,
				urlImage: (await import('@img/portfolio/projects/psylab/portfolio.png')).default,
				title: 'Портфолио',
				description: 'На странице "Портфолио" отображены личности, которые выступали (не спрашиваете, почему так).',
			},
		],
		resources: [
			{
				image: (await import('@img/social/github.png')).default,
				text: 'Перейти на GitHub (использовался как хостинг)',
				url: 'https://github.com/Endermax200113/psylabcinema',
			},
		],
	},
]
