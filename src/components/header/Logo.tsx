import React from 'react'
import './Logo.sass'

const Logo: React.FC = (): JSX.Element => {
	return (
		<div className={'logo'}>
			<a className={'logo-link'} href="/">
				<span className={'logo-link__name'}>Максим </span>
				<span className={'logo-link__lastname'}>Халласаар</span>
			</a>
		</div>
	)
}

export default Logo