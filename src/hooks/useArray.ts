import { useCallback, useDebugValue, useEffect, useState } from 'react'

type ArrayCallback<T> = () => T[]

export const useArray = <T>(callback: ArrayCallback<T>): T[] => {
	const [array, setArray] = useState<T[]>([])
	useDebugValue(array)

	const callbackArray: ArrayCallback<T> = useCallback(callback, [callback])

	useEffect(() => {
		if (array.length !== 0) return

		const arr: T[] = callbackArray()

		setArray(arr)
	}, [array, callbackArray])

	return array
}
