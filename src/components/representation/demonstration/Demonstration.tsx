import React, { HTMLAttributes } from 'react'
import scss from './Demonstration.module.scss'
import Information from './information/Information'
import Image from '@ui/image/Image'
import { useAdaptiveSize } from '@hooks/useAdaptiveSize'

const imgDevices: string = (await import('@img/representation/devices.png')).default

interface PropsDemonstration extends HTMLAttributes<HTMLDivElement> {}

const Demonstration: React.FC<PropsDemonstration> = () => {
	const isDesktop: boolean = useAdaptiveSize()

	return (
		<div className={scss.demonstration}>
			<Information />

			{isDesktop && (
				<Image
					url={imgDevices}
					alt='Устройства'
					classWrap={scss.images}
				/>
			)}
		</div>
	)
}

export default Demonstration
