import React from 'react'
import sass from './ErrorBoundary.module.sass'
import { ErrorResponse, useRouteError } from 'react-router-dom'
import RootMain, { PropsRootMain } from '@components/main/Main'
import Section from '@components/section/Section'
import Heading from '@ui/text/heading/Heading'
import Description from '@ui/text/description/Description'

interface PropsErrorBoundary extends PropsRootMain {}

const ErrorBoundary: React.FC<PropsErrorBoundary> = ({ ...props }) => {
	const err = useRouteError() as ErrorResponse
	console.error(err.status ? `${err.status} -> ${err.statusText}` : 'Некорректный запрос!')

	return (
		<RootMain className={sass.error} {...props}>
			<Section className={sass.info}>
				<Heading className={sass.code} children={err.status ?? '400'} />
				<Description className={sass.reason} children={err.data || 'Некорректный запрос!'} />
			</Section>
		</RootMain>
	)
}

export default ErrorBoundary
