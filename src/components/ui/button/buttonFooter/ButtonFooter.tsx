import React from 'react'
import scss from './ButtonFooter.module.scss'
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
			className={scss.button}
			onClick={handleClickToTop}
			{...props}>
			<Image
				url={imgBack}
				classWrap={scss.wrap}
			/>

			<Label
				type='span'
				className={scss.label}>
				Вернуться наверх
			</Label>
		</Button>
	)
}

export default ButtonFooter
