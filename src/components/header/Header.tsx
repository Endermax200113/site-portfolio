import React, { HTMLAttributes, RefObject, useRef, useState } from 'react'
import sass from './Header.module.sass'
import { useScrolling } from '@hooks/useScrolling'
import Navbar from '@components/navbar/Navbar'
import { spotClass } from '@utils/headerControl'
import { useLocation } from 'react-router-dom'
import { useRenderEffect } from '@hooks/useRenderEffect'

interface PropsHeader extends HTMLAttributes<HTMLElement> {}

const Header: React.FC<PropsHeader> = () => {
	const thisHeader: RefObject<HTMLElement> = useRef<HTMLElement>(null)
	const { pathname } = useLocation()

	const [headerFixed, setHeaderFixed] = useState<boolean>(false)

	const mainLinks: string[] = ['/', '/about', '/skills', '/portfolio', '/cv']
	const inMainLinks = (pathname: string): boolean => {
		for (let i = 0; i < mainLinks.length; i++) {
			const link: string = mainLinks[i]

			if (pathname === link) return true
			else continue
		}

		return false
	}

	const [isMain, setIsMain] = useState<boolean>(inMainLinks(pathname))

	const headerClass: string = spotClass(sass, 'header', isMain, headerFixed)

	useRenderEffect(() => {
		setIsMain(inMainLinks(pathname))

		window.scrollTo({
			top: 0,
		})
	}, [pathname])

	const [prevIsMain, setPrevIsMain] = useState<boolean>(isMain)
	const [prevScrollY, setPrevScrollY] = useState<number>(window.scrollY)
	if (prevIsMain !== isMain || prevScrollY !== window.scrollY) {
		setPrevIsMain(isMain)
		setPrevScrollY(window.scrollY)

		if (isMain && window.scrollY === 0) {
			if (headerFixed) {
				setHeaderFixed(false)
			}
		}
	}

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

	useScrolling(onScrolling, headerFixed, isMain)

	return (
		<header className={headerClass} ref={thisHeader}>
			<Navbar isMain={isMain} headerFixed={headerFixed} />
		</header>
	)
}

export default Header
