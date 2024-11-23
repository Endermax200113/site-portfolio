import { json, Params } from 'react-router-dom'

type LinksOnMain = (string | null)[]

const loadMain = (params: Params): Response => {
	const links: LinksOnMain = [null, 'about', 'skills', 'portfolio', 'cv']

	const isUndefined = <T>(anything: T | undefined): T | null => {
		return !anything ? null : anything
	}

	for (let i = 0; i < links.length; i++) {
		const link: string | null = links[i]
		console.log(1, isUndefined(params.block), 2, link, 3, isUndefined(params.block) !== link)

		if (isUndefined(params.block) !== link) {
			continue
		} else {
			console.log('ДОЛЖНО РАБОТАТЬ!')

			return json('OK', { status: 200 })
		}
	}

	throw new Response('Такой страницы не существует!', {
		status: 404,
		statusText: 'This page does not exist!',
	})
}

export { loadMain }
