import React, { useEffect, useState } from 'react'
import sass from './Quote.module.sass'
import Description from '@ui/text/description/Description'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsQuote {
	paragraphs: string[]
	classes?: string
}

const Quote: React.FC<PropsQuote> = ({ paragraphs, classes }) => {
	const [allClassesQuote, setAllClassesQuote] = useState<string>(sass.quote)

	useEffect(() => {
		if (!classes) return

		setAllClassesQuote(mergeAllClasses([sass.quote], classes))
	}, [classes, setAllClassesQuote])

	return (
		<blockquote className={allClassesQuote}>
			{paragraphs.map((paragraph: string, i: number) => {
				return <Description key={i}>{paragraph}</Description>
			})}
		</blockquote>
	)
}

export default Quote
