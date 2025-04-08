import React, { HTMLAttributes } from 'react'
import sass from './Buttons.module.sass'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import ButtonProject from '@ui/button/ButtonProject/ButtonProject'

interface PropsButtons extends HTMLAttributes<HTMLDivElement> {
	idProject: number
	site?: string
}

const Buttons: React.FC<PropsButtons> = ({ idProject, site, ...props }) => {
	const navigate: NavigateFunction = useNavigate()

	const onClickSite = (): void => {
		if (!site) return

		window.open(site, '_blank')
	}

	const onClickMore = (): void => navigate(`/projects/${idProject}`)

	return (
		<div className={sass.buttons} {...props}>
			{site && <ButtonProject onClick={onClickSite}>К сайту</ButtonProject>}

			<ButtonProject onClick={onClickMore}>Подробнее</ButtonProject>
		</div>
	)
}

export default Buttons
