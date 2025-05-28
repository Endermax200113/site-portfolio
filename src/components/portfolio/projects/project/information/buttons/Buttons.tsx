import React, { HTMLAttributes } from 'react'
import scss from './Buttons.module.scss'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import ButtonProject from '@ui/button/button-project/ButtonProject'

interface PropsButtons extends HTMLAttributes<HTMLDivElement> {
	idProject: number
	site?: string
}

const Buttons: React.FC<PropsButtons> = ({ idProject, site, ...props }) => {
	const navigate: NavigateFunction = useNavigate()

	const handleToSiteClick = (): void => {
		if (!site) return

		window.open(site, '_blank')
	}

	const handleMoreClick = (): void => navigate(`/projects/${idProject}`)

	return (
		<div
			className={scss.buttons}
			{...props}>
			{site && <ButtonProject onClick={handleToSiteClick}>К сайту</ButtonProject>}

			<ButtonProject onClick={handleMoreClick}>Подробнее</ButtonProject>
		</div>
	)
}

export default Buttons
