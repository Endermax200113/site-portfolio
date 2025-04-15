import { useState } from 'react'

type CallbackRenderEffect = () => void

export const useRenderEffect = (callback: CallbackRenderEffect, deps: readonly unknown[], init: boolean = false): void => {
	const [prevDeps, setPrevDeps] = useState<string>(JSON.stringify(deps))
	const [initialized, setInitialized] = useState<boolean>(false)

	if (init && !initialized) {
		setInitialized(true)
		callback()
	}

	if (prevDeps !== JSON.stringify(deps)) {
		setPrevDeps(JSON.stringify(deps))
		callback()
	}
}
