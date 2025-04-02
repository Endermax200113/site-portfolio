import { Dispatch, SetStateAction, useSyncExternalStore } from 'react'
import { Location, useLocation } from 'react-router-dom'

type CallbackFunction = <K extends keyof WindowEventMap>(this: Window, ev: WindowEventMap[K]) => any
type TypeMain = Dispatch<SetStateAction<boolean>>

let enabled: boolean = false

// const toggleMain = (setIsMain: TypeMain, location: Location): (() => void) => {
// 	const isMain: boolean = inMainLinks(location)

// 	setIsMain(isMain)

// 	return () => {}
// }

const toggleScroll = (callback: CallbackFunction, isMain: boolean): (() => void) => {
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

export const useScrolling = (listener: CallbackFunction, toggle: boolean, isMain: boolean, setIsMain: TypeMain): void => {
	const location: Location = useLocation()

	useSyncExternalStore(
		() => toggleScroll(listener, isMain),
		() => toggle
	)

	// useSyncExternalStore(
	// 	() => toggleMain(setIsMain, location),
	// 	() => location.pathname
	// )
}
