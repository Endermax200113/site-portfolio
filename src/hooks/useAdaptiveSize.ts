import { getRemByPx, getWidthScreen } from '@utils/screenControl'
import { useDebugValue, useState } from 'react'
import { useEventListener } from './useEventListener'

export const useAdaptiveSize = (): boolean => {
	const [isDesktop, setIsDesktop] = useState<boolean>(getWidthScreen() >= getRemByPx(900))
	useDebugValue(isDesktop)

	const onResizeScreen = (): void => {
		if (getWidthScreen() >= getRemByPx(900) && !isDesktop) {
			setIsDesktop(true)
		} else if (getWidthScreen() < getRemByPx(900) && isDesktop) {
			setIsDesktop(false)
		}
	}

	useEventListener('resize', onResizeScreen, true)

	return isDesktop
}
