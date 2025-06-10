import React, { useState } from 'react'
import scss from './Project.module.scss'
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

type StateDialogGallery = {
	id: number
	isOpened: boolean
}

const Project: React.FC<PropsProject> = ({ ...props }) => {
	const data = useLoaderData() as DataPortfolio
	const dialogGalleryState = useState<StateDialogGallery>({
		id: 0,
		isOpened: false,
	})

	const setDialogGalleryData = dialogGalleryState[1]

	const { site, urlImage, name: projectName, description, gallery, resources, stack } = data

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
		setDialogGalleryData({
			id,
			isOpened: true,
		})
	}

	const handleOpenLinkClick = (link: string): void => {
		window.open(link, '_blank')
	}

	return (
		<RootMain
			className={scss.project}
			{...props}>
			<Section className={scss.details}>
				<Heading
					children={projectName}
					className={scss['project-name']}
					mergeClass
				/>

				<Image
					url={urlImage}
					alt='Превью-картинка'
					classWrap={scss['img-wrap']}
					className={scss['img']}
				/>

				<Description className={scss.description}>{description}</Description>

				{site && <Button className={scss.button}>К сайту</Button>}
			</Section>

			{gallery && (
				<Section className={scss.info}>
					<Heading
						children='Галерея'
						className={scss['info-title']}
						mergeClass
					/>

					<div className={scss.gallery}>
						{arrMaxSixGallery.map((image, i) => {
							return (
								<Gallery
									name={image.title}
									urlImage={image.urlImage}
									className={scss['gallery-image']}
									clickButton={() => handleOpenClick(image.id)}
									tabIndex={i + 1}
									key={`project-gallery-${i}`}
								/>
							)
						})}
					</div>

					{gallery.length > 6 && (
						<Button
							className={scss.button}
							onClick={() => handleOpenClick()}>
							Посмотреть всё
						</Button>
					)}
				</Section>
			)}

			<Section className={scss.info}>
				<Heading
					children='Стек'
					className={scss['info-title']}
					mergeClass
				/>
				<SkillsList skills={stack} />
			</Section>

			{resources && resources.length > 0 && (
				<Section className={scss.info}>
					<Heading
						children='Ссылки'
						className={scss['info-title']}
						mergeClass
					/>

					{/* <ul className={scss['resources-list']}>
						{resources.map(({ image, text, url }, i) => {
							return (
								<li
									className={scss['resource-item']}
									key={i}>
									<Button
										onClick={() => handleOpenLinkClick(url)}
										className={scss['resource-link']}>
										<Image
											src={image}
											alt='Иконка'
											className={scss['resource-image']}
										/>
										<span className={scss['resource-text']}>{text}</span>
									</Button>
								</li>
							)
						})}
					</ul> */}

					<ul className={scss['resources-list']}>
						{new Array(10).fill(resources[0]).map(({ image, text, url }, i) => {
							return (
								<li
									className={scss['resource-item']}
									key={i}>
									<Button
										onClick={() => handleOpenLinkClick(url)}
										className={scss['resource-link']}>
										<Image
											src={image}
											alt='Иконка'
											className={scss['resource-image']}
										/>
										<span className={scss['resource-text']}>{text}</span>
									</Button>
								</li>
							)
						})}
					</ul>
				</Section>
			)}

			{/* {gallery && (
				<DialogGallery
					gallery={gallery}
					state={dialogGalleryState}
				/>
			)} */}
		</RootMain>
	)
}

export default Project
