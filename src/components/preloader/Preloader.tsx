import React, { HTMLAttributes } from 'react'
import scss from './Preloader.module.scss'

interface PropsPreloader extends HTMLAttributes<HTMLDivElement> {}

const Preloader: React.FC<PropsPreloader> = () => {
	return (
		<div className={scss.preload}>
			<div className={scss.load}>
				<div className={scss.first} />
				<div className={scss.second} />
				<div className={scss.third} />
			</div>
		</div>
	)
}

export default Preloader
