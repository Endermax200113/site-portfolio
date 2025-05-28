import React from 'react'
import scss from './ButtonProject.module.scss'
import Button, { PropsButton } from '../Button'

interface PropsButtonProject extends PropsButton {}

const ButtonProject: React.FC<PropsButtonProject> = ({ children, ...props }) => {
	return (
		<Button
			className={scss.button}
			{...props}>
			{children}
		</Button>
	)
}

export default ButtonProject
