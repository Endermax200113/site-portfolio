import React, { HTMLAttributes, RefObject, useRef, useState } from 'react'
import sass from './Header.module.sass'
import { useScrolling } from '@hooks/useScrolling'
import Navbar from '@components/navbar/Navbar'
import { spotClass } from '@utils/headerControl'
import { useLocation } from 'react-router-dom'

interface PropsHeader extends HTMLAttributes<HTMLElement> {}

const Header: React.FC<PropsHeader> = () => {
	const thisHeader: RefObject<HTMLElement> = useRef<HTMLElement>(null)
	const { pathname } = useLocation()

	const [headerFixed, setHeaderFixed] = useState<boolean>(false)
	const [isMain, setIsMain] = useState<boolean>(true)

	const headerClass: string = spotClass(sass, 'header', isMain, headerFixed)
	const mainLinks: string[] = ['/', '/about', '/skills', '/portfolio', '/cv']

	const inMainLinks = (pathname: string): boolean => {
		for (let i = 0; i < mainLinks.length; i++) {
			const link: string = mainLinks[i]

			if (pathname === link) return true
			else continue
		}

		return false
	}

	const [prevPathname, setPrevPathname] = useState<string>(pathname)
	if (pathname !== prevPathname) {
		setPrevPathname(pathname)
		setIsMain(inMainLinks(pathname))

		window.scrollTo({
			top: 0,
		})
	}

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
