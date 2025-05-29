import React, { forwardRef, RefAttributes } from 'react'
import scss from './Resume.module.scss'
import Heading from '@ui/text/heading/Heading'
import Separator from '@ui/separator/Separator'
import Image from '@ui/image/Image'
import DescriptionResume from '@ui/text/description/description-resume/DescriptionResume'
import Buttons from './buttons/Buttons'

const imgPreview: string = (await import('@img/resume/preview.png')).default

interface PropsResume extends RefAttributes<HTMLElement> {}

const Resume: React.FC<PropsResume> = forwardRef<HTMLElement>(({ ...props }, forwardedRef) => {
	return (
		<section
			className={scss.resume}
			{...props}
			ref={forwardedRef}>
			<div className={scss.gradient}>
				<Heading
					children='CV-Резюме'
					mergeClass
					className={scss.title}
				/>

				<DescriptionResume>В этом CV-резюме составлены вся информация про меня, в котором входят все навыки, образования, контактные данные и личные данные. Вы можете посмотреть как с сайта, так и при необходимости скачать PDF-файл.</DescriptionResume>

				<Separator classWrap={scss.separator} />

				<Image
					url={imgPreview}
					classWrap={scss.wrap}
					className={scss.image}
				/>

				<Buttons />
			</div>
		</section>
	)
})

export default Resume
