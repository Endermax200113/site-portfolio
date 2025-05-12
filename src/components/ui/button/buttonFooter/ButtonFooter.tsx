import React from 'react'
import sass from './ButtonFooter.module.sass'
import Button, { PropsButton } from '../Button'
import Image from '@ui/image/Image'
import Label from '@ui/text/label/Label'

const imgBack: string = (await import('@svg/footer/back.svg')).default

interface PropsButtonFooter extends PropsButton {}

const ButtonFooter: React.FC<PropsButtonFooter> = ({ ...props }) => {
	const handleClickToTop = (): void => {
		window.scrollTo({
			top: 0,
		})
	}

	return (
		<Button
			className={sass.button}
			onClick={handleClickToTop}
			{...props}>
			<Image
				url={imgBack}
				classWrap={sass.wrap}
			/>

			<Label
				type='span'
				className={sass.label}>
				Вернуться наверх
			</Label>
		</Button>
	)
}

export default ButtonFooter
