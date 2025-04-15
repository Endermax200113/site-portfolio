import React, { HTMLAttributes } from 'react'
import sass from './Section.module.sass'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsSection extends HTMLAttributes<HTMLElement> {}

const Section: React.FC<PropsSection> = ({ className, children, ...props }) => {
	const classSection: string = mergeAllClasses([sass.section], className)

	return (
		<section className={classSection} {...props}>
			{children}
		</section>
	)
}

export default Section
