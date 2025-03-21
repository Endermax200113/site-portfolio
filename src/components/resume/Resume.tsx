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
				<Heading text='CV-Резюме' classes={sass.title} />

				<Description classes={sass.description}>В этом CV-резюме составлены вся информация про меня, в котором входят все навыки, образования, контактные данные и личные данные. Вы можете посмотреть как с сайта, так и при необходимости скачать PDF-файл.</Description>

				<Separator classes={sass.separator} />

				<Image url={require('@img/resume/preview.png')} classesWrap={sass.wrap} classesImage={sass.image} />

				<div className={sass.buttons}>
					<Button classes={sass.button} click={showResume}>
						Посмотреть
					</Button>

					<Button classes={sass.button} click={downloadResume}>
						Скачать файл
					</Button>
				</div>
			</div>
		</section>
	)
})

export default Resume
