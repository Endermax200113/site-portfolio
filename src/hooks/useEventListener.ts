import { useDebugValue, useSyncExternalStore } from 'react'

type EventOptions = boolean | AddEventListenerOptions

type FullWindow = Window & typeof globalThis

type ElementOrWindow = HTMLElement | FullWindow

type KeysWindow = keyof WindowEventMap

type KeysHTMLElement = keyof HTMLElementEventMap

type ConditionalKeys<E extends ElementOrWindow> = E extends FullWindow ? KeysWindow : KeysHTMLElement

type WindowCallbackFunction<K extends KeysWindow> = (this: Window, event: WindowEventMap[K]) => any

type HTMLElementCallbackFunction<E extends HTMLElement, K extends KeysHTMLElement> = (this: E, event: HTMLElementEventMap[K]) => any

type ConditionalCallbackFunction<E extends ElementOrWindow> = E extends FullWindow ? WindowCallbackFunction<KeysWindow> : HTMLElementCallbackFunction<E extends HTMLElement ? E : HTMLElement, KeysHTMLElement>

interface FunctionSubscribe {
	<E extends ElementOrWindow = FullWindow>(name: ConditionalKeys<E>, callback: ConditionalCallbackFunction<E>, toggle: boolean, from?: E | null, options?: EventOptions): () => void
}

const subscribe: FunctionSubscribe = (name, callback, toggle, from, options) => {
	const element: ElementOrWindow = !from ? window : from

	const remove = (): void => {
		element.removeEventListener(name, callback, options)
	}

	if (toggle) {
		element.addEventListener(name, callback, options)
	} else {
		remove()
	}

	return remove
}

interface HookEventListener {
	<E extends ElementOrWindow, K extends ConditionalKeys<E>>(name: K, callback: ConditionalCallbackFunction<E>, toggle: boolean, from?: E | null, options?: EventOptions): void
}

/**
 * Добавляет обработчик событии во время действия чего-либо.
 *
 * Правильное использование callback'а:
 * ```typescript
 * const button: HTMLButtonElement = document.querySelector('.button#button') as HTMLButtonElement
 *
 * const callback: (e: Event): void => {
 * 	if (e instanceof MouseEvent) {
 * 		console.log(`Ты кликнул на: (X: ${e.clientX} Y: ${e.clientY})!`)
 * 	}
 * }
 *
 * useEventListener('click', callback, toggle, button)
 * ```
 *
 * @param name Имя обработчика
 * @param callback Действие
 * @param toggle Переключатель (если true - обработчик будет работать)
 * @param from С какого элемента накладывают событие (по умолчанию window)
 * @param options Опции (необязательно)
 */
export const useEventListener: HookEventListener = (name, callback, toggle, from, options) => {
	useSyncExternalStore(
		() => subscribe(name, callback, toggle, from, options),
		() => toggle
	)

	useDebugValue(`${name} -> ${toggle}`)
}
