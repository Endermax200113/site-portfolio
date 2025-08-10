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
		briefDescription: "Для изучения Bootstrap'а 5 был взял этот макет из интернета и было принято решение сверстать его. Сайт был разработан в 2023 году.",
		description: 'Для изучения CSS-фреймворка был взят макет, в котором имелась только одна страница на этот сайт. Вместо обычного HTML было принято решение взять язык Pug для упрощения написания кода. Кроме этого сайт построен по методологии БЭМа. Поскольку сайт является одностраничный был использован программный инструмент Gulp. Чтобы строго соответствовать вёрстку сайта был использован плагин PixelPerfect в браузере.',
		stack: [
			[(await import('@svg/skills/pug.svg')).default, 'Pug'],
			[(await import('@svg/skills/sass.svg')).default, 'SASS'],
			[(await import('@svg/skills/bootstrap.svg')).default, 'Bootstrap'],
			[(await import('@svg/skills/js.svg')).default, 'JavaScript'],
			[(await import('@svg/skills/gulp.svg')).default, 'Gulp'],
			[(await import('@svg/skills/git.svg')).default, 'Git'],
		],
		gallery: [
			{
				id: 0,
				urlImage: (await import('@img/portfolio/projects/markethink/1.png')).default,
				title: 'Хедер',
				description: 'На заднем плане отображён зелёный фон с кубиками. Сверху отображён хедер с навигацией. По середине компания кратко описывает о себе.',
			},
			{
				id: 1,
				urlImage: (await import('@img/portfolio/projects/markethink/2.png')).default,
				title: 'Агенство',
				description: 'Сверху отображаются какие компании пользуются услугами. Ниже рассказывают, что они - стратегическое агенство. Справа написаны достоинства компании.',
			},
			{
				id: 2,
				urlImage: (await import('@img/portfolio/projects/markethink/3.png')).default,
				title: 'Контент',
				description: 'Здесь описываются, что, если люди воспользуются эту сеть, то компания продвигают контент в разных социальных сетях.',
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
				description: 'В этом футуре отображаются следующее: слева кратко описано, что компания делает; справа ― навигационное меню, услуги и компания; снизу ― копирайт.',
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
		briefDescription: 'Кофейная коза ― это заведение во Пскове, в котором люди могут выпить кофе на свой вкус. Сайт разработан в 2021 году.',
		description: 'Сайт-визитка разработана командой «КакВариант» в 2021 году по реальному заказу. Поскольку сайт является одностраничный был использован программный инструмент Gulp.',
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
				description: 'На заднем плане на каждой линии справа налево передвигаются изображения, на котором отображены сотрудники этого заведения и не только. Кроме того снизу отображены две кнопки, в котором можно было переходить на социальные сети.',
			},
			{
				id: 3,
				urlImage: (await import('@img/portfolio/projects/coffeegoat/4.png')).default,
				title: 'Отзывы',
				description: 'Тут отображаются отзывы с 4-ёх сайтов, в котором ставят оценку по 5-балльной шкале, и сам же отзыв.',
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
				description: 'В мобильной версии отображёно модальное окно для бронирования столика. Здесь просто нажимаются на картинки.',
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
		briefDescription: 'Для изучения фреймворка Vue было решено взять макет посложнее. Она была разработана в 2023 году.',
		description: 'Этот сайт разработан на фреймворк Vue, а также была использована технология Vuex. Для изучения фреймворка Vue был взят макет, который будет иметь многостраничный сайт. Кроме этого сайт в SASS файлах разработан по методологии БЭМа. Чтобы строго соответствовать вёрстку сайта был использован плагин PixelPerfect в браузере.',
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
				description: 'Здесь отображена страница с результатом поиска. Статьи отображены как заглушки.',
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
				description: 'Здесь отображён редактор профиля, в котором можно поменять имя вместе с фамилией, почту, пароль и аватар.',
			},
			{
				id: 5,
				urlImage: (await import('@img/portfolio/projects/programmers-website/6.png')).default,
				title: 'Модальное окно',
				description: 'Чтобы появилась модальное окно, достаточно нажать на кнопку «Написать мне» на сайдбаре. Здесь заполняется форма, в котором указываются имя вместе с фамилией, почта и текст. Кроме этого снизу указаны контактные данные, с помощью которого можно с ним связаться.',
			},
			{
				id: 6,
				urlImage: (await import('@img/portfolio/projects/programmers-website/7.png')).default,
				title: 'Начало статьи',
				description: 'На этой странице отображена подробная статья, в котором имеются ссылочные тексты «Вернуться назад» и «Поделиться», заголовок статьи, дата написания статьи, теги и сама же статья.',
			},
			{
				id: 7,
				urlImage: (await import('@img/portfolio/projects/programmers-website/8.png')).default,
				title: 'Конец статьи',
				description: 'На этой же странице отображён конец статьи, в котором входит рекомендация, форма, в котором можно прокомментировать, и комментарии, которые написали люди.',
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
				description: 'Здесь отображён сайдбар для мобильной версии.',
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
		briefDescription: 'Для улучшения навыков был взят макет из интернета и было свёрстан этот сайт в 2022 году.',
		description: 'Был взят макет из интернета, т.к. было интересно, как сверстать сайт на несколько тем, один из которых будет присутствовать тёмная тема. В файле CSS (SCSS) был разработан по методологии БЭМа. Поскольку сайт является одностраничный было принято решение использовать программный инструмент как Gulp. Чтобы вёрстка была строго по макету, был использован веб-плагин PixelPerfect.',
		stack: [
			[(await import('@svg/skills/html.svg')).default, 'HTML'],
			[(await import('@svg/skills/sass.svg')).default, 'SCSS'],
			[(await import('@svg/skills/js.svg')).default, 'JavaScript'],
			[(await import('@svg/skills/jquery.svg')).default, 'jQuery'],
			[(await import('@svg/skills/gulp.svg')).default, 'Gulp'],
			[(await import('@svg/skills/git.svg')).default, 'Git'],
			[(await import('@svg/skills/figma.svg')).default, 'Figma'],
		],
		gallery: [
			{
				id: 0,
				urlImage: (await import('@img/portfolio/projects/tech-world/1.png')).default,
				title: 'Хедер сайта',
				description: 'Хедер имеет логотип сайта и выпадающий список, в котором можно изменить тему. Также тут коротко рассказывают, кто они себя представляют.',
			},
			{
				id: 1,
				urlImage: (await import('@img/portfolio/projects/tech-world/2.png')).default,
				title: 'О нас',
				description: 'В этой секции написано, почему с ними выгодно работать, и рассказывают свои плюсы.',
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
				description: 'В этой секции написано, что они работают с великолепной командой.',
			},
			{
				id: 4,
				urlImage: (await import('@img/portfolio/projects/tech-world/5.png')).default,
				title: 'Портфолио и обратная связь',
				description: 'В верхней секции можно увидеть, какие сайты разработали. Во второй секции ― обратная связь, где заполняют форму.',
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
		briefDescription: 'Это командный учебный проект для колледжа, разработанный во время 3-го курса в мае 2021 года. Основные цели: разработать сайт, продемонстрировать свои навыки из всего изученного. Этот сайт является статическим, т.к файлы выложены на GitHub Pages.',
		description: 'Сайт «Psylab Cinema» представляет собой кинотеатр, в котором описывает все плюсы и его достоинства. Кроме того на главной страницы показывают все франшизы, которые показывают в кинотеатре, а также отзывы людей. На странице «О нас» также показывает плюсы кинотеатра, в котором описывают про комфортную атмосферу, про кинобар, про красоту, а также указывает местоположение кинотеатра. На странице «Портфолио» указаны только знаменитые личности, которые выступали.',
		stack: [
			[(await import('@svg/skills/html.svg')).default, 'html'],
			[(await import('@svg/skills/sass.svg')).default, 'sass'],
			[(await import('@svg/skills/js.svg')).default, 'JavaScript'],
			[(await import('@svg/skills/jquery.svg')).default, 'jQuery'],
			[(await import('@svg/skills/gulp.svg')).default, 'Gulp'],
			[(await import('@svg/skills/git.svg')).default, 'git'],
			[(await import('@svg/skills/photoshop.svg')).default, 'Photoshop'],
		],
		gallery: [
			{
				id: 0,
				urlImage: (await import('@img/portfolio/projects/psylab/main.png')).default,
				title: 'Главная страница',
				description: 'На главной странице отображены достоинства кинотеатра, франшизы, а также отзывы.',
			},
			{
				id: 1,
				urlImage: (await import('@img/portfolio/projects/psylab/about.png')).default,
				title: 'О нас',
				description: 'На странице «О нас» показывает, почему лучше посетить этот кинотеатр.',
			},
			{
				id: 2,
				urlImage: (await import('@img/portfolio/projects/psylab/portfolio.png')).default,
				title: 'Портфолио',
				description: 'На странице «Портфолио» отображены личности, которые выступали.',
			},
		],
		resources: [
			{
				image: (await import('@img/social/github.png')).default,
				text: 'Перейти на GitHub',
				url: 'https://github.com/Endermax200113/psylabcinema',
			},
		],
	},
]
