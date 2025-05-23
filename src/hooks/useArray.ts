import { useDebugValue } from 'react'

type ArrayCallback<T> = () => T[]

export const useArray = <T>(callback: ArrayCallback<T>) => {
	const array: T[] = callback()
	useDebugValue(array)

	return array
}
