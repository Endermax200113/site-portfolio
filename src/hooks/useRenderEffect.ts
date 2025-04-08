import { useState } from 'react'

type CallbackRenderEffect = () => void

export const useRenderEffect = (callback: CallbackRenderEffect, deps: readonly unknown[]): void => {
	const [prevDeps, setPrevDeps] = useState<string>(JSON.stringify(deps))

	if (prevDeps !== JSON.stringify(deps)) {
		setPrevDeps(JSON.stringify(deps))
		callback()
	}
}
