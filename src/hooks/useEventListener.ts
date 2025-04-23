import { useDebugValue, useSyncExternalStore } from 'react'

type CallbackFunction<K extends keyof WindowEventMap> = (this: Window, e: WindowEventMap[K]) => void
type EventOptions = boolean | AddEventListenerOptions

interface HookEventListener {
	<K extends keyof WindowEventMap>(name: K, callback: CallbackFunction<K>, toggle: boolean, options?: EventOptions): void
}

interface SubscribeEventListener {
	<K extends keyof WindowEventMap>(name: K, callback: CallbackFunction<K>, toggle: boolean, options?: EventOptions): () => void
}

const subscribe: SubscribeEventListener = (name, callback, toggle, options) => {
	const remove = (): void => {
		window.removeEventListener(name, callback, options)
	}

	if (toggle) {
		window.addEventListener(name, callback, options)
	} else {
		remove()
	}

	return remove
}

export const useEventListener: HookEventListener = (name, callback, toggle, options) => {
	useSyncExternalStore(
		() => subscribe(name, callback, toggle, options),
		() => toggle
	)

	useDebugValue(`${name} -> ${toggle}`)
}
