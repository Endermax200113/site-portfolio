import React, { useEffect, useState } from 'react'
import sass from './Quote.module.sass'
import Description from '@ui/text/description/Description'

interface PropsQuote {
	paragraphs: string[]
	classes?: string
}

const Quote: React.FC<PropsQuote> = ({ paragraphs, classes }) => {
	const [allClassesQuote, setAllClassesQuote] = useState<string>(sass.quote)

	useEffect(() => {
		if (classes === undefined) return

		const arr: string[] = []

		arr.push(sass.quote)
		arr.push(classes)

		const allClasses: string = arr.join(' ').trimEnd()

		setAllClassesQuote(allClasses)
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
