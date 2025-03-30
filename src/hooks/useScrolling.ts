import { useSyncExternalStore } from 'react'

type CallbackFunction = <K extends keyof WindowEventMap>(this: Window, ev: WindowEventMap[K]) => any

const subscribe = (callback: CallbackFunction) => {
	window.addEventListener('scroll', callback)

	return () => {
		window.removeEventListener('scroll', callback)
	}
}

export const useScrolling = (listener: () => void, toggle: boolean) => {
	return useSyncExternalStore(
		() => subscribe(listener),
		() => toggle,
		() => true
	)
}
