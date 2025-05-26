import React, { HTMLAttributes, RefObject, useRef, useState } from 'react'
import scss from './Header.module.scss'
import { useScrolling } from '@hooks/useScrolling'
import Navbar from '@components/navbar/Navbar'
import { spotClass } from '@utils/headerControl'
import { useLocation } from 'react-router-dom'
import { useRenderEffect } from '@hooks/useRenderEffect'
import { useEventListener } from '@hooks/useEventListener'
import { getRemByPx, getWidthScreen } from '@utils/screenControl'
import ButtonMenu from '@ui/button/button-menu/ButtonMenu'

interface PropsHeader extends HTMLAttributes<HTMLElement> {}

const Header: React.FC<PropsHeader> = () => {
	const thisHeader: RefObject<HTMLElement> = useRef<HTMLElement>(null)
	const { pathname } = useLocation()

	const [headerFixed, setHeaderFixed] = useState<boolean>(false)
	const stateIsOpenMenu = useState<boolean>(false)
	const [isOpenMenu, setIsOpenMenu] = stateIsOpenMenu

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

	const headerClass: string = spotClass(scss, 'header', isMain, headerFixed)

	useRenderEffect(() => {
		setIsMain(inMainLinks(pathname))

		window.scrollTo({
			top: 0,
		})
	}, [pathname])

	const [allowFixHeader, setAllowFixHeader] = useState<boolean>(getWidthScreen() >= getRemByPx(900))

	const onResizeWidthScreen = (): void => {
		if (getWidthScreen() >= getRemByPx(900) && !allowFixHeader) {
			setAllowFixHeader(true)
		} else if (getRemByPx(900) > getWidthScreen() && allowFixHeader) {
			setAllowFixHeader(false)
			setHeaderFixed(false)
		}

		if (getWidthScreen() >= getRemByPx(768)) {
			if (isOpenMenu) setIsOpenMenu(false)
		}
	}

	useEventListener('resize', onResizeWidthScreen, true)

	const [prevIsMain, setPrevIsMain] = useState<boolean>(isMain)
	const [prevScrollY, setPrevScrollY] = useState<number>(window.scrollY)
	if ((prevIsMain !== isMain || prevScrollY !== window.scrollY) && allowFixHeader) {
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
			if (allowFixHeader) {
				if (window.scrollY === 0) {
					if (headerFixed) {
						setHeaderFixed(false)
					}
				} else {
					if (!headerFixed) {
						setHeaderFixed(true)
					}
				}
			} else {
				if (allowFixHeader) setAllowFixHeader(false)
			}
		}
	}

	useScrolling(onScrolling, headerFixed, isMain)

	return (
		<header
			className={headerClass}
			ref={thisHeader}>
			<Navbar
				isMain={isMain}
				headerFixed={headerFixed}
				isOpenMenu={isOpenMenu}
			/>

			{!allowFixHeader && <ButtonMenu stateIsOpen={stateIsOpenMenu} />}
		</header>
	)
}

export default Header
