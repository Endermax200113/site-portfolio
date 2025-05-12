import React, { HTMLAttributes } from 'react'
import sass from './Buttons.module.sass'
import ButtonResume from '@ui/button/buttonResume/ButtonResume'

const pdfResume: string = (await import('@assets/download/resume.pdf')).default

interface PropsButtons extends HTMLAttributes<HTMLDivElement> {}

const Buttons: React.FC<PropsButtons> = ({ ...props }) => {
	const showResume = (): void => {
		window.open(pdfResume)
	}

	const downloadResume = (): void => {
		const helper: HTMLAnchorElement = document.createElement('a')

		helper.href = pdfResume
		helper.download = 'resume.pdf'
		helper.click()
		helper.remove()
	}

	return (
		<div
			className={sass.buttons}
			{...props}>
			<ButtonResume onClick={showResume}>Посмотреть</ButtonResume>
			<ButtonResume onClick={downloadResume}>Скачать файл</ButtonResume>
		</div>
	)
}

export default Buttons
