import React, { HTMLAttributes } from 'react'
import scss from './Section.module.scss'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsSection extends HTMLAttributes<HTMLElement> {}

const Section: React.FC<PropsSection> = ({ className, children, ...props }) => {
	const classSection: string = mergeAllClasses([scss.section], className)

	return (
		<section
			className={classSection}
			{...props}>
			{children}
		</section>
	)
}

export default Section
