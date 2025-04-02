import React, { MutableRefObject, useCallback, useEffect, useMemo, useRef } from 'react'
import sass from './Main.module.sass'
import About from '@components/about/About'
import Skills from '@components/skills/Skills'
import Portfolio from '@components/portfolio/Portfolio'
import Resume from '@components/resume/Resume'
import { Params, useParams } from 'react-router-dom'
import RootMain from '@components/main/Main'

interface PropsMain {}

type LinksOnMain = {
	[link: string]: MutableRefObject<any>
}

const Main: React.FC<PropsMain> = () => {
	const params: Readonly<Params<string>> = useParams()
	// TODO Добавить ссылку representation
	const about: MutableRefObject<any> = useRef(null)
	const skills: MutableRefObject<any> = useRef(null)
	const portfolio: MutableRefObject<any> = useRef(null)
	const cv: MutableRefObject<any> = useRef(null)

	const links: LinksOnMain = useMemo(() => {
		return {
			about,
			skills,
			portfolio,
			cv,
		}
	}, [])

	const scrollToBlock = useCallback(
		(block: string = '') => {
			if (block in links) {
				links[block].current.scrollIntoView({
					behavior: 'smooth',
				})
			}
		},
		[links]
	)

	useEffect(() => {
		scrollToBlock(params.block)
	}, [scrollToBlock, params])

	return (
		<RootMain classes={sass.main} withoutMargin>
			<div className={sass.gradient}>
				<About ref={links.about} />
				<Skills ref={links.skills} />
			</div>

			<Portfolio ref={links.portfolio} />
			<Resume ref={links.cv} />
		</RootMain>
	)
}

export default Main
