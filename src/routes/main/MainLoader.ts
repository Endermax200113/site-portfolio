import { Params } from 'react-router-dom'

type LinksOnMain = (string | null)[]

const loadMain = (params: Params) => {
	const links: LinksOnMain = [null, 'about', 'skills', 'portfolio', 'cv']

	const isUndefined = <T>(anything: T | undefined): T | null => (!anything ? null : anything)

	for (let i = 0; i < links.length; i++) {
		const link: string | null = links[i]

		if (isUndefined(params.block) !== link) {
			continue
		} else {
			return 'OK'
		}
	}

	throw new Response('Такой страницы не существует!', {
		status: 404,
		statusText: 'This page does not exist!',
	})
}

export { loadMain }
