import React from 'react'
import sass from './Quote.module.sass'
import Description from '@ui/text/description/Description'
import useClass from '@hooks/useClass'

interface PropsQuote {
	paragraphs: string[]
	classes?: string
}

const Quote: React.FC<PropsQuote> = ({ paragraphs, classes }) => {
	const allClassesQuote: string = useClass(sass.quote, classes)

	return (
		<blockquote className={allClassesQuote}>
			{paragraphs.map((paragraph: string, i: number) => {
				return (
					<Description classes={sass.description} key={i}>
						{paragraph}
					</Description>
				)
			})}
		</blockquote>
	)
}

export default Quote
