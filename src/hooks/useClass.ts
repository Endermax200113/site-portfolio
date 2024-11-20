import { mergeAllClasses } from '@utils/sassControl'
import { useDebugValue, useEffect, useState } from 'react'

export const useClass = (defaultClass: string, classes?: string): string => {
	const [allClasses, setAllClasses] = useState<string>(!classes ? defaultClass : mergeAllClasses([defaultClass], classes))
	useDebugValue(allClasses)

	useEffect(() => {
		if (!classes) {
			setAllClasses(defaultClass)
			return
		}

		setAllClasses(mergeAllClasses([defaultClass], classes))
	}, [classes, defaultClass])

	return allClasses
}
