import React, { HTMLAttributes } from 'react'
import sass from './Demonstration.module.sass'
import Information from './information/Information'

interface PropsDemonstration extends HTMLAttributes<HTMLDivElement> {}

const Demonstration: React.FC<PropsDemonstration> = () => {
	return (
		<div className={sass.demonstration}>
			<Information />
		</div>
	)
}

export default Demonstration
