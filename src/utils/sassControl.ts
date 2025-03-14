interface PropsTrimSass {
	(
		sass: {
			readonly [key: string]: string
		},
		arr: string[]
	): string
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
	(
		sass: {
			readonly [key: string]: string
		},
		arr: string[],
		isTest?: boolean
	): string
}

export const transformTestClass: PropsElementTest = (sass, arr, isTest): string => {
	const array: string[] = []

	arr.forEach(str => {
		array.push(sass[str])
	})
	isTest && array.push(sass['test'])

	const res: string = array.join(' ').trimEnd()

	return res
}

interface PropsAllClasses {
	(arr: string[], classes?: string): string
}

export const mergeAllClasses: PropsAllClasses = (arr, classes): string => {
	if (classes) {
		arr.push(classes)
	}

	return arr.join(' ').trim()
}
