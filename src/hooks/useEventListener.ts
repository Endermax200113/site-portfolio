import { useEffect } from 'react'

export const useEventListener = <K extends keyof WindowEventMap>(name: K, listener: (this: Window, e: WindowEventMap[K]) => void, dependency: boolean, options?: boolean | AddEventListenerOptions) => {
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
