import React from 'react'
import sass from './Header.module.sass'
import { transformTestClass } from '../../utils/sassControl'
import Logo from './Logo'
import Navbar from './Navbar'

interface PropsHeader {
	test?: boolean
}

const Header: React.FC<PropsHeader> = ({ test }): React.JSX.Element => {
	const classHeader: string = transformTestClass(sass, ['header'], test)
	const classContainer: string = !test ? 'container' : 'container test'
	const classWrap: string = transformTestClass(sass, ['wrap'], test)

	return (
		<header className={classHeader}>
			<div className={classContainer}>
				<div className={classWrap}>
					<Logo test={test} />
					<Navbar test={test} />
				</div>
			</div>
		</header>
	)
}

export default Header
