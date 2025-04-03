import React, { useState } from 'react'
import sass from './Project.module.sass'
import Heading from '@ui/text/heading/Heading'
import Image from '@ui/image/Image'
import Description from '@ui/text/description/Description'
import Button from '@ui/button/Button'
import Separator from '@ui/separator/Separator'
import Link from '@ui/link/Link'
import { useArray } from '@hooks/useArray'
import { AllSkills, BlockSkills } from '@helper/skills'
import { distributeSkills } from '@utils/arrayControl'
import RowSkills from '@components/skills/rowSkills/RowSkills'
import { useLoaderData } from 'react-router-dom'
import { DataPortfolio } from '@/data/portfolio'
import Gallery from '@components/gallery/Gallery'
import DialogGallery from '@components/gallery/dialogGallery/DialogGallery'
import { Gallery as GalleryData } from '@helper/portfolio'
import RootMain from '@components/main/Main'

interface PropsProject {}

const Project: React.FC<PropsProject> = () => {
	const data = useLoaderData() as DataPortfolio
	const [dialogGalleryId, setDialogGalleryId] = useState<number>(0)
	const [dialogGalleryIsOpened, setDialogGalleryIsOpened] = useState<boolean>(false)

	const { site, urlImage, name: projectName, description, stack, gallery, resources } = data

	const arrStack: AllSkills[] = useArray(() => {
		const blockStack: BlockSkills[] = distributeSkills([
			{
				title: 'Стек:',
				skills: stack,
			},
		])

		return blockStack[0][1]
	})

	const arrMaxSixGallery: GalleryData[] = useArray(() => {
		if (!gallery) return []

		const arr: GalleryData[] = []

		for (let i = 0; i < 6; i++) {
			if (!gallery[i]) break

			arr.push(gallery[i])
		}

		return arr
	})

	const onOpen = (id: number = 0): void => {
		setDialogGalleryId(id)
		setDialogGalleryIsOpened(true)
	}

	return (
		<RootMain classes={sass.project}>
			<section className={sass.details}>
				<Heading children={projectName} className={sass['project-name']} />

				<Image url={urlImage} alt='Превью-картинка' classWrap={sass['img-wrap']} className={sass['img']} />

				<Description classes={sass.description}>{description}</Description>

				{site && <Button className={sass.button}>К сайту</Button>}

				<Separator classes={sass.separator} />

				{gallery && (
					<div className={sass.info}>
						<Heading level='2' children='Галерея:' className={sass['info-title']} />

						<div className={sass.gallery}>
							{arrMaxSixGallery.map((image, i) => {
								return <Gallery name={image.title} urlImage={image.urlImage} classes={sass['gallery-image']} clickButton={() => onOpen(image.id)} key={i} />
							})}
						</div>

						{gallery.length > 6 && (
							<Button className={sass.button} onClick={() => onOpen(0)}>
								Посмотреть всё
							</Button>
						)}
					</div>
				)}

				<div className={sass.info}>
					<Heading level='2' children='Стек:' className={sass['info-title']} />

					<div className={sass.stack}>
						{arrStack.map((fourStack, i) => {
							return <RowSkills rowSkills={fourStack} key={i} />
						})}
					</div>
				</div>

				{resources && resources.length > 0 && (
					<div className={sass.info}>
						<Heading level='2' children='Ресурсы:' className={sass['info-title']} />

						<ul className={sass['resources-list']}>
							{resources.map(([text, url], i) => {
								return (
									<li className={sass['resource-item']} key={i}>
										<Link link={url} text={text} target='_blank' classes={sass['resource-link']} />
									</li>
								)
							})}
						</ul>
					</div>
				)}
			</section>

			{gallery && <DialogGallery gallery={gallery} stateIdGallery={[dialogGalleryId, setDialogGalleryId]} stateIsOpened={[dialogGalleryIsOpened, setDialogGalleryIsOpened]} />}
		</RootMain>
	)
}

export default Project
