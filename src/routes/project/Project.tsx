import React, { useState } from 'react'
import sass from './Project.module.sass'
import Heading from '@ui/text/heading/Heading'
import Image from '@ui/image/Image'
import Description from '@ui/text/description/Description'
import Button from '@ui/button/Button'
import { useArray } from '@hooks/useArray'
import { useLoaderData } from 'react-router-dom'
import { DataPortfolio } from '@/data/portfolio'
import Gallery from '@components/gallery/Gallery'
import DialogGallery from '@components/gallery/dialogGallery/DialogGallery'
import { Gallery as GalleryData } from '@helper/portfolio'
import RootMain, { PropsRootMain } from '@components/main/Main'
import Section from '@components/section/Section'
import SkillsList from '@components/skills/skillsAll/skillsArea/skillsList/SkillsList'

interface PropsProject extends PropsRootMain {}

const Project: React.FC<PropsProject> = ({ ...props }) => {
	const data = useLoaderData() as DataPortfolio
	const [dialogGalleryId, setDialogGalleryId] = useState<number>(0)
	const [dialogGalleryIsOpened, setDialogGalleryIsOpened] = useState<boolean>(false)

	const { site, urlImage, name: projectName, description, gallery, resources, stack } = data

	const states = {
		stateIdGallery: [dialogGalleryId, setDialogGalleryId],
		stateIsOpened: [dialogGalleryIsOpened, setDialogGalleryIsOpened],
	}

	const arrMaxSixGallery: GalleryData[] = useArray(() => {
		if (!gallery) return []

		const arr: GalleryData[] = []

		for (let i = 0; i < 6; i++) {
			if (!gallery[i]) break

			arr.push(gallery[i])
		}

		return arr
	})

	const handleOpenClick = (id: number = 0): void => {
		setDialogGalleryId(id)
		setDialogGalleryIsOpened(true)
	}

	const handleOpenLinkClick = (link: string): void => {
		window.open(link, '_blank')
	}

	return (
		<RootMain className={sass.project} {...props}>
			<Section className={sass.details}>
				<Heading children={projectName} className={sass['project-name']} mergeClass />

				<Image url={urlImage} alt='Превью-картинка' classWrap={sass['img-wrap']} className={sass['img']} />

				<Description className={sass.description}>{description}</Description>

				{site && <Button className={sass.button}>К сайту</Button>}
			</Section>

			{gallery && (
				<Section className={sass.info}>
					<Heading children='Галерея' className={sass['info-title']} mergeClass />

					<div className={sass.gallery}>
						{arrMaxSixGallery.map((image, i) => {
							return <Gallery name={image.title} urlImage={image.urlImage} className={sass['gallery-image']} clickButton={() => handleOpenClick(image.id)} key={i} />
						})}
					</div>

					{gallery.length > 6 && (
						<Button className={sass.button} onClick={() => handleOpenClick()}>
							Посмотреть всё
						</Button>
					)}
				</Section>
			)}

			<Section className={sass.info}>
				<Heading children='Стек' className={sass['info-title']} mergeClass />
				<SkillsList skills={stack} className={sass.stack} mergeClass />
			</Section>

			{resources && resources.length > 0 && (
				<Section className={sass.info}>
					<Heading children='Ссылки' className={sass['info-title']} mergeClass />

					<ul className={sass['resources-list']}>
						{resources.map(({ image, text, url }, i) => {
							return (
								<li className={sass['resource-item']} key={i}>
									<Button onClick={() => handleOpenLinkClick(url)} className={sass['resource-link']}>
										<Image src={image} alt='Иконка' className={sass['resource-image']} />
										<span className={sass['resource-text']}>{text}</span>
									</Button>
								</li>
							)
						})}
					</ul>
				</Section>
			)}

			{gallery && <DialogGallery gallery={gallery} stateIdGallery={[dialogGalleryId, setDialogGalleryId]} stateIsOpened={[dialogGalleryIsOpened, setDialogGalleryIsOpened]} />}
		</RootMain>
	)
}

export default Project
