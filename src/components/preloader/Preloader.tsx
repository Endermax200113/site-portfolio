import React, { HTMLAttributes } from 'react'
import scss from './Preloader.module.scss'

interface PropsPreloader extends HTMLAttributes<HTMLDivElement> {}

const Preloader: React.FC<PropsPreloader> = () => {
	return <div className={scss.preload}>Preloader</div>
}

export default Preloader
