import React, { HTMLAttributes } from 'react'
import sass from './Demonstration.module.sass'
import Information from './information/Information'
import Image from '@ui/image/Image'

const imgDevices: string = (await import('@img/representation/devices.png')).default

interface PropsDemonstration extends HTMLAttributes<HTMLDivElement> {}

const Demonstration: React.FC<PropsDemonstration> = () => {
	return (
		<div className={sass.demonstration}>
			<Information />

			<Image
				url={imgDevices}
				alt='Устройства'
				classWrap={sass.images}
			/>
		</div>
	)
}

export default Demonstration
