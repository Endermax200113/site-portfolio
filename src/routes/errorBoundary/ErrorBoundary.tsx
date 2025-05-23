import React from 'react'
import scss from './ErrorBoundary.module.scss'
import { ErrorResponse, useRouteError } from 'react-router-dom'
import RootMain, { PropsRootMain } from '@components/main/Main'
import Section from '@components/section/Section'
import Heading from '@ui/text/heading/Heading'
import Description from '@ui/text/description/Description'
import { ErrorsClient } from '@helper/http'

interface PropsErrorBoundary extends PropsRootMain {}

const ErrorBoundary: React.FC<PropsErrorBoundary> = ({ ...props }) => {
	const err = useRouteError() as ErrorResponse
	console.error(err.status ? `${err.status} -> ${err.statusText}` : 'Некорректный запрос!')

	return (
		<RootMain
			className={scss.error}
			{...props}>
			<Section className={scss.info}>
				<Heading
					className={scss.code}
					children={err.status ?? ErrorsClient.BAD_REQUEST}
				/>
				<Description
					className={scss.reason}
					children={err.data || 'Некорректный запрос!'}
				/>
			</Section>
		</RootMain>
	)
}

export default ErrorBoundary
