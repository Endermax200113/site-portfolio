import React from 'react'
import { transformTestClass } from '../../utils/sassControl'
import sass from './Navbar.module.sass'

type PropsNavbar = {
	test?: boolean
}

const Navbar: React.FC<PropsNavbar> = ({ test }) => {
	const classNavbar: string = transformTestClass(sass, ['navbar'], test)
	const classMenu: string = transformTestClass(sass, ['menu'], test)
	const classMenuItem: string = transformTestClass(sass, ['menu-item'], test)
	const classMenuLink: string = transformTestClass(sass, ['menu-link'], test)

	return (
		<nav className={classNavbar}>
			<ul className={classMenu}>
				<li className={classMenuItem}>
					<a href='#main' className={classMenuLink}>
						Главная
					</a>
				</li>

				<li className={classMenuItem}>
					<a href='#about' className={classMenuLink}>
						Обо мне
					</a>
				</li>

				<li className={classMenuItem}>
					<a href='#portfolio' className={classMenuLink}>
						Портфолио
					</a>
				</li>

				<li className={classMenuItem}>
					<a href='#cv-resume' className={classMenuLink}>
						CV-резюме
					</a>
				</li>

				<li className={classMenuItem}>
					<a href='#contacts' className={classMenuLink}>
						Контакты
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
