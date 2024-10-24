import React, { useEffect, useState } from 'react'
import sass from './Footer.module.sass'
import Image from '@ui/image/Image'
import Button from '@ui/button/Button'
import Label from '@ui/text/label/Label'

interface PropsFooter {}

type ArrImagesSocial = {
	urlImage: string
	altImage: string
	link: string
}

const Footer: React.FC<PropsFooter> = () => {
	const [arrImages, setArrImages] = useState<ArrImagesSocial[]>([])

	const clickBackToTop = (): void => {
		window.scrollTo({
			top: 0,
		})
	}

	useEffect(() => {
		const arr: ArrImagesSocial[] = []

		arr.push({
			urlImage: require('@svg/footer/vk.svg'),
			altImage: 'VK',
			link: 'https://vk.com/maks_hallasaar',
		})

		arr.push({
			urlImage: require('@svg/footer/telegram.svg'),
			altImage: 'Telegram',
			link: 'https://t.me/justmax2001',
		})

		arr.push({
			urlImage: require('@svg/footer/github.svg'),
			altImage: 'GitHub',
			link: 'https://github.com/endermax200113',
		})

		arr.push({
			urlImage: require('@svg/footer/mail.svg'),
			altImage: 'Электронная почта',
			link: 'mailto:endermax200113@mail.ru',
		})

		setArrImages(arr)
	}, [setArrImages])

	return (
		<footer className={sass.footer}>
			<Button type='custom' classes={sass.back} click={() => clickBackToTop()}>
				<Image url={require('@svg/footer/back.svg')} classesWrap={sass.wrap} />
				<span>Вернуться наверх</span>
			</Button>

			<div className={sass.social}>
				{arrImages.map(({ urlImage, altImage, link }, i) => {
					return (
						<Button type='custom' click={() => window.open(link)} classes={sass['social-button']} key={i}>
							<Image url={urlImage} alt={altImage} classesWrap={sass['social-wrap']} classesImage={sass['social-image']} />
						</Button>
					)
				})}
			</div>

			<Label classes={sass.copyright}>
				<b className={sass['copyright-bold']}>&copy;2024 Максим Халласаар.</b> <span className={sass['copyright-normal']}>Все права защищены.</span>
			</Label>
		</footer>
	)
}

export default Footer
