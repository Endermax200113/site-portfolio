import { json, Params } from 'react-router-dom'

type LinksOnMain = (string | null)[]

const loadMain = (params: Params): Response => {
	const links: LinksOnMain = [null, 'about', 'skills', 'portfolio', 'cv']

	const isUndefined = <T>(anything: T | undefined): T | null => (!anything ? null : anything)

	for (let i = 0; i < links.length; i++) {
		const link: string | null = links[i]

		if (isUndefined(params.block) !== link) {
			continue
		} else {
			return json('OK', { status: 200 })
		}
	}

	throw new Response('Такой страницы не существует!', {
		status: 404,
		statusText: 'This page does not exist!',
	})
}

export { loadMain }
