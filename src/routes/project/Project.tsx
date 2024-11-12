import React from 'react'
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

interface PropsProject {}

const Project: React.FC<PropsProject> = () => {
	const data = useLoaderData() as DataPortfolio

	const { site, urlImage, name: projectName, description, stack, resources } = data

	const arrStack: AllSkills[] = useArray<AllSkills>(() => {
		const blockStack: BlockSkills[] = distributeSkills([
			{
				title: 'Стек:',
				skills: stack,
			},
		])

		return blockStack[0][1]
	})

	return (
		<main className={sass.project}>
			<section className={sass.details}>
				<Heading text={projectName} classes={sass['project-name']} />

				<Image url={urlImage} alt='Превью-картинка' classesWrap={sass['img-wrap']} objectFit='cover' />

				<Description classes={sass.description}>{description}</Description>

				{site && (
					<Button type='big' classes={sass['btn-site']}>
						К сайту
					</Button>
				)}

				<Separator classes={sass.separator} />

				<div className={sass.info}>
					<Heading level='2' text='Стек:' classes={sass['info-title']} />

					<div className={sass['stack']}>
						{arrStack.map((fourStack, i) => {
							return <RowSkills rowSkills={fourStack} key={i} />
						})}
					</div>
				</div>

				{resources && (
					<div className={sass.info}>
						<Heading level='2' text='Ресурсы:' classes={sass['info-title']} />

						<ul className={sass['resources-list']}>
							{resources.map(([text, url], i) => {
								return (
									<li className={sass['resource-item']} key={i}>
										<Link link={url} text={text} classes={sass['resource-link']} />
									</li>
								)
							})}
						</ul>
					</div>
				)}
			</section>
		</main>
	)
}

export default Project
