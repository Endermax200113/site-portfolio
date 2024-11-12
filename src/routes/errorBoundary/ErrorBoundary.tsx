import React from 'react'
import sass from './ErrorBoundary.module.sass'
import { ErrorResponse, useRouteError } from 'react-router-dom'

interface PropsErrorBoundary {}

const ErrorBoundary: React.FC<PropsErrorBoundary> = () => {
	const err = useRouteError() as ErrorResponse
	console.error(err ? `${err.status} -> ${err.statusText}` : 'Страница не найдена, т.к. задан неверный URL!')

	return (
		<main className={sass.error}>
			<section className={sass.info}>
				<b className={sass.code}>{err.status ?? 'Неизвестная ошибка'}</b>

				<strong className={sass.reason}>{err.data || 'Страница не найдена, т.к. задан неверный URL!'}</strong>
			</section>
		</main>
	)
}

export default ErrorBoundary
