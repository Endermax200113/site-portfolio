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
	return (
		<section className={sass.resume} {...props} ref={forwardedRef}>
			<div className={sass.gradient}>
				<Heading text='CV-Резюме' classes={sass.title} />

				<Description classes={sass.description}>В этом CV-резюме составлены вся информация про меня, в котором входят все навыки, образования, контактные данные и личные данные. Вы можете посмотреть как с сайта, так и при необходимости скачать PDF-файл.</Description>

				<Separator classes={sass.separator} />

				<Image url={require('@img/resume/preview.png')} classesWrap={sass.wrap} classesImage={sass.image} />

				<Button classes={sass.button}>Скачать файл</Button>
			</div>
		</section>
	)
})

export default Resume
