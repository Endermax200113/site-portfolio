import { mergeAllClasses } from '@utils/sassControl'
import { useEffect, useState } from 'react'

const useClass = (defaultClass: string, classes?: string): string => {
	const [allClasses, setAllClasses] = useState<string>(defaultClass)

	useEffect(() => {
		if (!classes) {
			setAllClasses(defaultClass)
			return
		}

		setAllClasses(mergeAllClasses([defaultClass], classes))
	}, [classes, defaultClass])

	return allClasses
}

export default useClass
