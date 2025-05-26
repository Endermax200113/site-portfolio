import React, { HTMLAttributes } from 'react'
import scss from './Information.module.scss'
import InformationText from './informationText/InformationText'
import Social from './social/Social'
import { useAdaptiveSize } from '@hooks/useAdaptiveSize'
import Separator from '@ui/separator/Separator'

interface PropsInformation extends HTMLAttributes<HTMLDivElement> {}

const Information: React.FC<PropsInformation> = () => {
	const isDesktop: boolean = useAdaptiveSize()

	return (
		<div className={scss.information}>
			<InformationText />

			{!isDesktop && (
				<Separator
					classWrap={scss['separator-wrap']}
					className={scss.separator}
				/>
			)}

			<Social />
		</div>
	)
}

export default Information
