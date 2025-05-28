import React, { MutableRefObject, useCallback, useLayoutEffect, useMemo, useRef } from 'react'
import scss from './Main.module.scss'
import About from '@components/about/About'
import Skills from '@components/skills/Skills'
import Portfolio from '@components/portfolio/Portfolio'
import Resume from '@components/resume/Resume'
import { Params, useParams } from 'react-router-dom'
import RootMain, { PropsRootMain } from '@components/main/Main'
import Representation from '@components/representation/Representation'

interface PropsMain extends PropsRootMain {}

type LinksOnMain = {
	[link: string]: MutableRefObject<null | HTMLElement>
}

const Main: React.FC<PropsMain> = ({ ...props }) => {
	const params: Readonly<Params<string>> = useParams()
	const representation: MutableRefObject<null | HTMLElement> = useRef(null)
	const about: MutableRefObject<null | HTMLElement> = useRef(null)
	const skills: MutableRefObject<null | HTMLElement> = useRef(null)
	const portfolio: MutableRefObject<null | HTMLElement> = useRef(null)
	const cv: MutableRefObject<null | HTMLElement> = useRef(null)

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
				links[block].current?.scrollIntoView({
					behavior: 'smooth',
				})
			}
		},
		[links]
	)

	// ! Есть сомнение на использование хука useLayoutEffect!
	//
	// ? Задача: 	Во время загрузки главной страницы автоматически переместить ту секцию, в котором
	// ?			расположена ссылка. Например: при загрузки ссылки localhost:3000/portfolio
	// ? 			перемещает на секцию "Портфолио".
	//
	// * Что нужно:	Постараться избегать хуки как useEffect и useLayoutEffect, используя метод
	// *			scrollToBlock(), чтобы было меньше багов и более эффективно.
	//
	// $ Проблемы:	1. 	Во время рендеринга этого компонента создаются переменные, в которых
	// $				используется хук useRef, а по умолчанию присвоено значение null.
	// $ 			2.	Невозможно присвоить значение в хук useRef как компонент, так как этот хук
	// $				будет возвращать тип данных как MutableRefObject<JSX.Element>. Его
	// $				невозможно вставить в возврат текущего компонента, поскольку вставляется
	// $				только тип данных ReactNode.
	// $ 			3.	Собственный хук useRenderEffect не поможет, поскольку этот хук работает во
	// $ 				время рендера компонента: хук работает как до отрисовки (до возврата), так
	// $ 				и во время рендера. Стоит вспомнить, что в методе scrollToBlock() присутствует
	// $				элемент переменной links[block], который должен вернуть определённый компонент
	// $ 				после возврата текущего компонента. Если попытаться использовать этот хук, то
	// $ 				произойдёт ошибка: переменная links[block] будет возвращать null, т.к. он
	// $				указан по умолчанию.
	//
	// & Единственное решение:
	// &			Приходиться использовать хук useLayoutEffect. Его особенность заключается в том,
	// &			что он сработает после рендеринга, но до отрисовки компонента. Только в этом случае
	// &			после рендера все переменные, использованные хуком useRef, будут присвоены значения
	// &			по своему.
	useLayoutEffect(() => scrollToBlock(params.block), [scrollToBlock, params])

	return (
		<RootMain
			className={scss.main}
			withoutMargin
			{...props}>
			<Representation ref={links.representation} />

			<div className={scss.gradient}>
				<About ref={links.about} />
				<Skills ref={links.skills} />
			</div>

			<Portfolio ref={links.portfolio} />
			{/* <Resume ref={links.cv} /> */}
		</RootMain>
	)
}

export default Main
