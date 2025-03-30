import { Sass, trimSass } from './sassControl'

export const spotClass = (sass: Sass, clazz: string, isMain: boolean, headerFixed: boolean): string => {
	if (isMain) {
		if (headerFixed) {
			return trimSass(sass, [clazz, 'fixed'])
		} else {
			return sass[clazz]
		}
	} else {
		return trimSass(sass, [clazz, 'fixed', 'rest'])
	}
}
