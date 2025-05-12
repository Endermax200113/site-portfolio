export type DataHeaderSocialImage = {
	link: string
	urlImage: string
	altImage: string
}

export const dataHeaderSocialImage: DataHeaderSocialImage[] = [
	{
		link: 'https://vk.com/maks_hallasaar',
		urlImage: (await import('@img/social/vk.png')).default,
		altImage: 'VK',
	},
	{
		link: 'https://github.com/Endermax200113',
		urlImage: (await import('@img/social/github.png')).default,
		altImage: 'GitHub',
	},
	{
		link: 'https://t.me/justmax2001',
		urlImage: (await import('@img/social/telegram.png')).default,
		altImage: 'Telegram',
	},
]
