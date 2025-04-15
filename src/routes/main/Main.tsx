import React, { MutableRefObject, useCallback, useLayoutEffect, useMemo, useRef } from 'react'
import sass from './Main.module.sass'
import About from '@components/about/About'
import Skills from '@components/skills/Skills'
import Portfolio from '@components/portfolio/Portfolio'
import Resume from '@components/resume/Resume'
import { Params, useParams } from 'react-router-dom'
import RootMain, { PropsRootMain } from '@components/main/Main'
import Representation from '@components/representation/Representation'

interface PropsMain extends PropsRootMain {}

type LinksOnMain = {
	[link: string]: MutableRefObject<any>
}

const Main: React.FC<PropsMain> = ({ ...props }) => {
	const params: Readonly<Params<string>> = useParams()
	const representation: MutableRefObject<any> = useRef(<Representation />)
	const about: MutableRefObject<any> = useRef(<About />)
	const skills: MutableRefObject<any> = useRef(<Skills />)
	const portfolio: MutableRefObject<any> = useRef(<Portfolio />)
	const cv: MutableRefObject<any> = useRef(<Resume />)

	const links: LinksOnMain = useMemo(() => {
		return {
			representation,
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

	// Есть сомнение на использования хука
	useLayoutEffect(() => scrollToBlock(params.block), [scrollToBlock, params])

	return (
		<RootMain className={sass.main} withoutMargin {...props}>
			<Representation ref={links.representation} />

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
