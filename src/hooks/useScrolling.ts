import { useSyncExternalStore } from 'react'

type CallbackFunction = <K extends keyof WindowEventMap>(this: Window, ev: WindowEventMap[K]) => any

let enabled: boolean = false

const subscribe = (callback: CallbackFunction, isMain: boolean): (() => void) => {
	if (isMain) {
		window.addEventListener('scroll', callback)

		if (!enabled) enabled = true
	}

	return () => {
		if (enabled) {
			window.removeEventListener('scroll', callback)

			if (!isMain) {
				enabled = false
			}
		}
	}
}

export const useScrolling = (listener: CallbackFunction, toggle: boolean, isMain: boolean): boolean => {
	return useSyncExternalStore(
		() => subscribe(listener, isMain),
		() => toggle,
		() => isMain
	)
}
