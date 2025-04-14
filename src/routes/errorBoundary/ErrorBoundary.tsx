import React from 'react'
import sass from './ErrorBoundary.module.sass'
import { ErrorResponse, useRouteError } from 'react-router-dom'
import RootMain from '@components/main/Main'

interface PropsErrorBoundary {}

const ErrorBoundary: React.FC<PropsErrorBoundary> = () => {
	const err = useRouteError() as ErrorResponse
	console.error(err.status ? `${err.status} -> ${err.statusText}` : 'Неправильный или некорректный запрос!')

	return (
		<RootMain className={sass.error}>
			<section className={sass.info}>
				<strong className={sass.code}>{err.status ?? '400'}</strong>

				<b className={sass.reason}>{err.data || 'Неправильный или некорректный запрос!'}</b>
			</section>
		</RootMain>
	)
}

export default ErrorBoundary
