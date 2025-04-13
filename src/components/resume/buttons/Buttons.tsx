import React, { HTMLAttributes } from 'react'
import sass from './Buttons.module.sass'
import ButtonResume from '@ui/button/buttonResume/ButtonResume'

interface PropsButtons extends HTMLAttributes<HTMLDivElement> {}

const Buttons: React.FC<PropsButtons> = ({ ...props }) => {
	const showResume = (): void => {
		window.open(require('@assets/download/resume.pdf') as string)
	}

	const downloadResume = (): void => {
		const helper: HTMLAnchorElement = document.createElement('a')

		helper.href = require('@assets/download/resume.pdf') as string
		helper.download = 'resume.pdf'
		helper.click()
		helper.remove()
	}

	return (
		<div className={sass.buttons} {...props}>
			<ButtonResume onClick={showResume}>Посмотреть</ButtonResume>
			<ButtonResume onClick={downloadResume}>Скачать файл</ButtonResume>
		</div>
	)
}

export default Buttons
