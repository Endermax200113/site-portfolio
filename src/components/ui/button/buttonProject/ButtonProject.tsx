import React from 'react'
import sass from './ButtonProject.module.sass'
import Button, { PropsButton } from '../Button'

interface PropsButtonProject extends PropsButton {}

const ButtonProject: React.FC<PropsButtonProject> = ({ children, ...props }) => {
	return (
		<Button className={sass.button} {...props}>
			{children}
		</Button>
	)
}

export default ButtonProject
