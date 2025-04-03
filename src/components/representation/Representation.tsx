import React, { forwardRef, RefAttributes } from 'react'
import sass from './Representation.module.sass'
import Background from './background/Background'
import Demonstration from './demonstration/Demonstration'

interface PropsRepresentation extends RefAttributes<HTMLElement> {
	[props: string]: any
}

const Representation: React.FC<PropsRepresentation> = forwardRef<HTMLElement>(({ ...props }, forwardedRef) => {
	return (
		<section className={sass.representation} {...props} ref={forwardedRef}>
			<Background />
			<Demonstration />
		</section>
	)
})

export default Representation
