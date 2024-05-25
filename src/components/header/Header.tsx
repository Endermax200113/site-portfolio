import React from 'react'
import './../../assets/sass/App.sass'
import './Header.sass'
import Logo from './Logo'
import Navbar from './Navbar'

interface PropsHeader {
	real?: boolean
}

const Header: React.FC<PropsHeader> = ({real}): JSX.Element => {
	return real 
		? (<header className='header'>
			<div className='container container--space-between'>
				<Logo />
				<Navbar />
			</div>
		</header>)
		: (<div className='header-false'></div>)
}

export default Header