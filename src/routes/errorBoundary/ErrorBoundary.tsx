import React from 'react'
import sass from './ErrorBoundary.module.sass'
import { ErrorResponse, useRouteError } from 'react-router-dom'
import Header from '@components/header/Header'
import Footer from '@components/footer/Footer'

interface PropsErrorBoundary {}

const ErrorBoundary: React.FC<PropsErrorBoundary> = () => {
	const err = useRouteError() as ErrorResponse
	console.error(err ? `${err.status} -> ${err.statusText}` : 'Страница не найдена, т.к. задан неверный URL!')

	return (
		<>
			<Header />

			<main className={sass.error}>
				<section className={sass.info}>
					<strong className={sass.code}>{err.status ?? 'Неизвестная ошибка'}</strong>

					<b className={sass.reason}>{err.data || 'Произошла ошибка по неизвестной причине!'}</b>
				</section>
			</main>

			<Footer />
		</>
	)
}

export default ErrorBoundary
