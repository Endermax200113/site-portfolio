import SVGImage from 'SVGImage'

type TypeImage = 'social' | 'big' | 'small'
export type Content = string | SVGImage

export interface ButtonContent {
	type: TypeImage
	img: Content
	text: string
}

export const spotButton = (type: TypeImage, content: Content, altImg?: string): ButtonContent => {
	if (type === 'social') {
		return {
			type: 'social',
			img: content,
			text: altImg ?? '',
		}
	} else {
		if (!altImg) {
			console.warn(`В компоненте 'Button' с типом '${type}' не имеет смысла вставлять что-то в аргумент 'aliImg'`)
		}

		if (typeof content !== 'string') {
			console.error(`В компоненте 'Button' с типом '${type}' невозможно поставить в аргумент 'content' как векторное изображение 'SVGImage'`)

			return {
				type,
				img: '',
				text: '',
			}
		}

		return {
			type,
			img: '',
			text: content,
		}
	}
}
