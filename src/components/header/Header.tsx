import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import sass from './Header.module.sass'
import Info from './info/Info'
import Representation from './representation/Representation'
import Navbar from '@components/navbar/Navbar'
import { trimSass } from '@utils/sassControl'
import { Location, Params, useLocation, useParams } from 'react-router-dom'

interface PropsHeader {}

const Header: React.FC<PropsHeader> = () => {
	const location: Location = useLocation()
	const params: Params = useParams()
	const [isMain, setIsMain] = useState<boolean>(true)

	const thisHeader: MutableRefObject<any> = useRef(null)

	const scrollToTop = useCallback(() => {
		thisHeader.current.scrollIntoView({
			behavior: 'smooth',
		})
	}, [thisHeader])

	useEffect(() => {
		const mainLinks: string[] = ['/', '/about', '/skills', '/portfolio', '/cv']

		const inMainLinks = (): boolean => {
			for (let i = 0; i < mainLinks.length; i++) {
				const link: string = mainLinks[i]

				if (location.pathname === link) return true
				else continue
			}

			return false
		}

		setIsMain(inMainLinks())

		scrollToTop()
	}, [setIsMain, location, params, scrollToTop])

	return (
		<header className={isMain ? sass.header : trimSass(sass, ['header', 'rest'])} ref={thisHeader}>
			{isMain && (
				<div className={sass.wrapper}>
					<div className={sass.detail}></div>
					<div className={sass['detail-transition']}></div>
				</div>
			)}

			<Navbar isMain={isMain} />

			{isMain && (
				<div className={sass['header-container']}>
					<div className={sass.begin}>
						<Info />
						<Representation />
					</div>
				</div>
			)}
		</header>
	)
}

export default Header
