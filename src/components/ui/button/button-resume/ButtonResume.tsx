import React from 'react'
import scss from './ButtonResume.module.scss'
import Button, { PropsButton } from '../Button'

interface PropsButtonResume extends PropsButton {}

const ButtonResume: React.FC<PropsButtonResume> = ({ children, ...props }) => {
	return (
		<Button
			className={scss.button}
			{...props}>
			{children}
		</Button>
	)
}

export default ButtonResume
