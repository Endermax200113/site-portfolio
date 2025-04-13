import React from 'react'
import sass from './ButtonResume.module.sass'
import Button, { PropsButton } from '../Button'

interface PropsButtonResume extends PropsButton {}

const ButtonResume: React.FC<PropsButtonResume> = ({ children, ...props }) => {
	return (
		<Button className={sass.button} {...props}>
			{children}
		</Button>
	)
}

export default ButtonResume
