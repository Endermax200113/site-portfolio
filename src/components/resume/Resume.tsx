import React, { forwardRef, RefAttributes } from 'react'
import sass from './Resume.module.sass'
import Heading from '@ui/text/heading/Heading'
import Separator from '@ui/separator/Separator'
import Image from '@ui/image/Image'
import DescriptionResume from '@ui/text/description/descriptionResume/DescriptionResume'
import Buttons from './buttons/Buttons'

const imgPreview: string = (await import('@img/resume/preview.png')).default

interface PropsResume extends RefAttributes<HTMLElement> {
	[props: string]: any
}

const Resume: React.FC<PropsResume> = forwardRef<HTMLElement>(({ ...props }, forwardedRef) => {
	return (
		<section
			className={sass.resume}
			{...props}
			ref={forwardedRef}>
			<div className={sass.gradient}>
				<Heading
					children='CV-Резюме'
					mergeClass
					className={sass.title}
				/>

				<DescriptionResume>В этом CV-резюме составлены вся информация про меня, в котором входят все навыки, образования, контактные данные и личные данные. Вы можете посмотреть как с сайта, так и при необходимости скачать PDF-файл.</DescriptionResume>

				<Separator classWrap={sass.separator} />

				<Image
					url={imgPreview}
					classWrap={sass.wrap}
					className={sass.image}
				/>

				<Buttons />
			</div>
		</section>
	)
})

export default Resume
