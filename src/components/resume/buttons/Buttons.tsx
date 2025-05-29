import React, { HTMLAttributes } from 'react'
import scss from './Buttons.module.scss'
import ButtonResume from '@ui/button/button-resume/ButtonResume'

const pdfResume: string = (await import('@assets/download/resume.pdf')).default

interface PropsButtons extends HTMLAttributes<HTMLDivElement> {}

const Buttons: React.FC<PropsButtons> = ({ ...props }) => {
	const handleShowClick = (): void => {
		window.open(pdfResume)
	}

	const handleDownloadClick = (): void => {
		const helper: HTMLAnchorElement = document.createElement('a')

		helper.href = pdfResume
		helper.download = 'resume.pdf'
		helper.click()
		helper.remove()
	}

	return (
		<div
			className={scss.buttons}
			{...props}>
			<ButtonResume onClick={handleShowClick}>Посмотреть</ButtonResume>
			<ButtonResume onClick={handleDownloadClick}>Скачать файл</ButtonResume>
		</div>
	)
}

export default Buttons
