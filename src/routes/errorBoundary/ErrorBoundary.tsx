import React from 'react'
import sass from './ErrorBoundary.module.sass'
import { ErrorResponse, useRouteError } from 'react-router-dom'

interface PropsErrorBoundary {}

const ErrorBoundary: React.FC<PropsErrorBoundary> = () => {
	const err = useRouteError() as ErrorResponse
	console.error(`${err.status} -> ${err.statusText}`)

	return (
		<main className={sass.error}>
			<section className={sass.info}>
				<b className={sass.code}>404</b>

				<strong className={sass.reason}>{err.data || 'Страница не найдена, т.к. задан неверный URL'}</strong>
			</section>
		</main>
	)
}

export default ErrorBoundary
