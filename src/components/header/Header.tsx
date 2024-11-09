import React, { useEffect, useState } from 'react'
import sass from './Header.module.sass'
import Info from './info/Info'
import Representation from './representation/Representation'
import Navbar from '@components/navbar/Navbar'
import { trimSass } from '@utils/sassControl'

interface PropsHeader {}

const Header: React.FC<PropsHeader> = () => {
	const [isMain, setIsMain] = useState<boolean>(true)

	useEffect(() => {
		if (window.location.pathname === '/') setIsMain(true)
		else setIsMain(false)
	}, [setIsMain])

	return (
		<header className={isMain ? sass.header : trimSass(sass, ['header', 'rest'])}>
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
