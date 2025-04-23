import { useSyncExternalStore } from 'react'

type CallbackFunction = <K extends keyof WindowEventMap>(this: Window, ev: WindowEventMap[K]) => any

let enabled: boolean = false

interface SubscribeToggleScroll {
	(callback: CallbackFunction, isMain: boolean): () => void
}

interface HookScrolling {
	(listener: CallbackFunction, toggle: boolean, isMain: boolean): void
}

const toggleScroll: SubscribeToggleScroll = (callback, isMain) => {
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

export const useScrolling: HookScrolling = (listener, toggle, isMain) => {
	useSyncExternalStore(
		() => toggleScroll(listener, isMain),
		() => toggle
	)
}
