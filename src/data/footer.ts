export type DataImagesSocial = {
	urlImage: string
	altImage: string
	link: string
}

export const dataImagesSocial: DataImagesSocial[] = [
	{
		urlImage: (await import('@svg/footer/vk.svg')).default,
		altImage: 'VK',
		link: 'https://vk.com/maks_hallasaar',
	},
	{
		urlImage: (await import('@svg/footer/telegram.svg')).default,
		altImage: 'Telegram',
		link: 'https://t.me/justmax2001',
	},
	{
		urlImage: (await import('@svg/footer/github.svg')).default,
		altImage: 'GitHub',
		link: 'https://github.com/endermax200113',
	},
	{
		urlImage: (await import('@svg/footer/mail.svg')).default,
		altImage: 'Электронная почта',
		link: 'mailto:endermax200113@mail.ru',
	},
]
