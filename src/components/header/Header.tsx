import React, { MutableRefObject, useCallback, useDebugValue, useEffect, useRef, useState } from 'react'
import sass from './Header.module.sass'
import { trimSass } from '@utils/sassControl'
import { useScrolling } from '@hooks/useScrolling'
import Navbar from '@components/navbar/Navbar'
import { spotClass } from '@utils/headerControl'

interface PropsHeader {}

const Header: React.FC<PropsHeader> = () => {
	const thisHeader: MutableRefObject<any> = useRef(null)

	const [headerFixed, setHeaderFixed] = useState<boolean>(false)
	const [isMain, setIsMain] = useState<boolean>(true)

	const headerClass: string = spotClass(sass, 'header', isMain, headerFixed)

	// TODO Дописать функционал

	const onScrolling = (): void => {
		if (isMain) {
			if (window.scrollY === 0) {
				if (headerFixed) {
					setHeaderFixed(false)
				}
			} else {
				if (!headerFixed) {
					setHeaderFixed(true)
				}
			}
		}
	}

	useScrolling(onScrolling, headerFixed)

	const scrollToTop = (): void => {
		thisHeader.current.scrollIntoView({
			behavior: 'smooth',
		})
	}

	const handleLoad = (): void => {
		scrollToTop()
	}

	return (
		<header className={headerClass} ref={thisHeader} onLoad={handleLoad}>
			<Navbar isMain={isMain} headerFixed={headerFixed} />
		</header>
	)
}

export default Header
