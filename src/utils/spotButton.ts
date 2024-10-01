export interface ButtonContent {
	type: 'social' | 'big' | 'small'
	img: string
	text: string
}

export const spotButton = (type: 'social' | 'big' | 'small', content: string, altImg?: string): ButtonContent => {
	switch (type) {
		case 'social':
			return {
				type: 'social',
				img: content,
				text: altImg !== undefined ? altImg : '',
			}
		case 'big':
			if (!altImg) console.warn("В компоненте 'Button' с типом 'big' не имеет смысла вставлять что-то в аргумент 'aliImg'")

			return {
				type: 'big',
				img: '',
				text: content,
			}
		case 'small':
		default:
			if (!altImg) console.warn("В компоненте 'Button' с типом 'small' не имеет смысла вставлять что-то в аргумент 'aliImg'")

			return {
				type: 'small',
				img: '',
				text: content,
			}
	}
}
