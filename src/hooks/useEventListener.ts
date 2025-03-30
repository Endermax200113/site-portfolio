import { useDebugValue, useEffect } from 'react'

/**
 * @deprecated Функцию не использовать, поскольку содержит <c>useEffect</c>
 */
export const useEventListener = <K extends keyof WindowEventMap>(name: K, listener: (this: Window, e: WindowEventMap[K]) => void, dependency: boolean, options?: boolean | AddEventListenerOptions) => {
	useDebugValue(name)

	useEffect(() => {
		const remove = (): void => {
			window.removeEventListener(name, listener, options)
		}

		if (dependency) {
			window.addEventListener(name, listener, options)
		} else {
			remove()
		}

		return remove
	}, [dependency, listener, name, options])
}
