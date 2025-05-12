import React, { BlockquoteHTMLAttributes } from 'react'
import scss from './Quote.module.scss'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsQuote extends BlockquoteHTMLAttributes<HTMLQuoteElement> {}

const Quote: React.FC<PropsQuote> = ({ children, className, ...props }) => {
	const classQuote: string = mergeAllClasses([scss.quote], className)

	return (
		<blockquote
			className={classQuote}
			{...props}>
			{children}
		</blockquote>
	)
}

export default Quote
