import { useDebugValue, useSyncExternalStore } from 'react'

let enabled = false

interface FunctionSubscribe {
	<E extends HTMLElement>(element: E, className: string, toggle: boolean, callback?: (toggle?: boolean) => void): () => void
}

const subscribe: FunctionSubscribe = (element, className, toggle, callback) => {
	const remove = (): void => {
		if (enabled && !toggle) {
			element.classList.remove(className)

			if (!!callback) {
				callback(toggle)
			}

			enabled = false
		}
	}

	if (toggle && !enabled) {
		element.classList.add(className)

		if (!!callback) {
			callback(toggle)
		}

		enabled = true
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
