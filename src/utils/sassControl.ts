export type Sass = {
	readonly [key: string]: string
}

interface PropsTrimSass {
	(sass: Sass, arr: string[]): string
}

export const trimSass: PropsTrimSass = (sass, arr): string => {
	const array: string[] = []

	arr.forEach(str => {
		array.push(sass[str])
	})

	const res: string = array.join(' ').trimEnd()

	return res
}

interface PropsElementTest {
	(sass: Sass, arr: string[], isTest?: boolean): string
}

export const transformTestClass: PropsElementTest = (sass, arr, isTest): string => {
	const array: string[] = []

	arr.forEach(str => {
		array.push(sass[str])
	})

	if (isTest) {
		array.push(sass['test'])
	}

	const res: string = array.join(' ').trimEnd()

	return res
}

interface PropsAllClasses {
	(arr: string[], classes?: string | null): string
}

export const mergeAllClasses: PropsAllClasses = (arr, classes): string => {
	if (classes) {
		arr.push(classes)
	}

	return arr.join(' ').trim()
}
