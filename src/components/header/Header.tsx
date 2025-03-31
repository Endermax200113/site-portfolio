import React, { Dispatch, MutableRefObject, SetStateAction, useCallback, useDebugValue, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import sass from './Header.module.sass'
import { trimSass } from '@utils/sassControl'
import { useScrolling } from '@hooks/useScrolling'
import Navbar from '@components/navbar/Navbar'
import { spotClass } from '@utils/headerControl'
import { Location, useLocation } from 'react-router-dom'

const mainLinks: string[] = ['/', '/about', '/skills', '/portfolio', '/cv']

const inMainLinks = (location: Location): boolean => {
	for (let i = 0; i < mainLinks.length; i++) {
		const link: string = mainLinks[i]

		if (location.pathname === link) return true
		else continue
	}

	return false
}

type TypeMain = Dispatch<SetStateAction<boolean>>

const subscribe = (setIsMain: TypeMain, location: Location): (() => void) => {
	setIsMain(inMainLinks(location))
	console.log(`${new Date().toLocaleTimeString()}: 2`)

	return () => {
		console.log(`${new Date().toLocaleTimeString()}: 3`)

		setIsMain(inMainLinks(location))
	}
}

const useMain = (setIsMain: TypeMain) => {
	const location: Location = useLocation()

	return useSyncExternalStore(
		() => subscribe(setIsMain, location),
		() => location.pathname,
		() => '/'
	)
}

interface PropsHeader {}

const Header: React.FC<PropsHeader> = () => {
	const thisHeader: MutableRefObject<any> = useRef(null)

	const [headerFixed, setHeaderFixed] = useState<boolean>(false)
	const [isMain, setIsMain] = useState<boolean>(true)

	console.log(`${new Date().toLocaleTimeString()}: 1`)

	useMain(setIsMain)

	const headerClass: string = spotClass(sass, 'header', isMain, headerFixed)

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

	useScrolling(onScrolling, headerFixed && isMain, isMain)

	const scrollToTop = (): void => {
		thisHeader.current.scrollIntoView({
			behavior: 'smooth',
		})
	}

	const handleLoad = (): void => {
		scrollToTop()
	}

	// useEffect(() => {
	// 	setIsMain(inMainLinks)
	// }, [location])

	//? // BUG Попытка пофиксить ссылки

	return (
		<header className={headerClass} ref={thisHeader} onLoad={handleLoad}>
			<Navbar isMain={isMain} headerFixed={headerFixed} />
		</header>
	)
}

export default Header
