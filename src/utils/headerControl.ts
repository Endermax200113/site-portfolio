import { Sass, trimSass } from './sassControl'

export const spotClass = (sass: Sass, clazz: string, isMain: boolean, headerFixed: boolean, isDesktop: boolean): string => {
	if (isMain) {
		if (headerFixed && isDesktop) {
			return trimSass(sass, [clazz, 'fixed'])
		} else {
			return sass[clazz]
		}
	} else {
		if (isDesktop) {
			return trimSass(sass, [clazz, 'fixed', 'rest'])
		} else {
			return trimSass(sass, [clazz, 'rest'])
		}
	}
}
