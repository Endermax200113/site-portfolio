import React, { forwardRef } from 'react'
import sass from './Resume.module.sass'
import Heading from '@ui/text/heading/Heading'
import Description from '@ui/text/description/Description'
import Separator from '@ui/separator/Separator'
import Image from '@ui/image/Image'
import Button from '@ui/button/Button'

interface PropsResume {
	[props: string]: any
}

const Resume: React.FC<PropsResume> = forwardRef<HTMLElement>(({ ...props }, forwardedRef) => {
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
		<section className={sass.resume} {...props} ref={forwardedRef}>
			<div className={sass.gradient}>
				<Heading children='CV-Резюме' className={sass.title} />

				<Description className={sass.description}>В этом CV-резюме составлены вся информация про меня, в котором входят все навыки, образования, контактные данные и личные данные. Вы можете посмотреть как с сайта, так и при необходимости скачать PDF-файл.</Description>

				<Separator className={sass.separator} />

				<Image url={require('@img/resume/preview.png')} classWrap={sass.wrap} className={sass.image} />

				<div className={sass.buttons}>
					<Button className={sass.button} onClick={showResume}>
						Посмотреть
					</Button>

					<Button className={sass.button} onClick={downloadResume}>
						Скачать файл
					</Button>
				</div>
			</div>
		</section>
	)
})

export default Resume
