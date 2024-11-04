export type DataImagesSocial = {
	urlImage: string
	altImage: string
	link: string
}

export const dataImagesSocial: DataImagesSocial[] = [
	{
		urlImage: require('@svg/footer/vk.svg'),
		altImage: 'VK',
		link: 'https://vk.com/maks_hallasaar',
	},
	{
		urlImage: require('@svg/footer/telegram.svg'),
		altImage: 'Telegram',
		link: 'https://t.me/justmax2001',
	},
	{
		urlImage: require('@svg/footer/github.svg'),
		altImage: 'GitHub',
		link: 'https://github.com/endermax200113',
	},
	{
		urlImage: require('@svg/footer/mail.svg'),
		altImage: 'Электронная почта',
		link: 'mailto:endermax200113@mail.ru',
	},
]
