import { useDebugValue, useSyncExternalStore } from 'react'

interface FunctionSubscribe {
	<E extends HTMLElement>(element: E, className: string, toggle: boolean, callback?: (toggle?: boolean) => void): () => void
}

const subscribe: FunctionSubscribe = (element, className, toggle, callback) => {
	const remove = (): void => {
		element.classList.remove(className)

		if (!!callback) callback(toggle)
	}

	if (toggle) {
		element.classList.add(className)

		if (!!callback) callback(toggle)
	} else {
		remove()
	}

	return remove
}

interface HookClassList {
	<E extends HTMLElement>(element: E, className: string, toggle: boolean, callback?: (toggle?: boolean) => void): void
}

export const useClassList: HookClassList = (element, className, toggle, callback) => {
	useSyncExternalStore(
		() => subscribe(element, className, toggle, callback),
		() => toggle
	)

	useDebugValue(`${element.className}: ${className} is ${toggle}`)
}
