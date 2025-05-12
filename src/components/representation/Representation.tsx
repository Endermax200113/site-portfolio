import React, { forwardRef, RefAttributes } from 'react'
import scss from './Representation.module.scss'
import Background from './background/Background'
import Demonstration from './demonstration/Demonstration'

interface PropsRepresentation extends RefAttributes<HTMLElement> {}

const Representation: React.FC<PropsRepresentation> = forwardRef<HTMLElement>(({ ...props }, forwardedRef) => {
	return (
		<section
			className={scss.representation}
			{...props}
			ref={forwardedRef}>
			<Background />
			<Demonstration />
		</section>
	)
})

export default Representation
