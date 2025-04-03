import React, { BlockquoteHTMLAttributes } from 'react'
import sass from './Quote.module.sass'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsQuote extends BlockquoteHTMLAttributes<HTMLQuoteElement> {}

const Quote: React.FC<PropsQuote> = ({ children, className, ...props }) => {
	const classQuote: string = mergeAllClasses([sass.quote], className)

	return (
		<blockquote className={classQuote} {...props}>
			{children}
		</blockquote>
	)
}

export default Quote
