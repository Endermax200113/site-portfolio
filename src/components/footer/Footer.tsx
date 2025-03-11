import React from 'react'
import sass from './Footer.module.sass'
import Image from '@ui/image/Image'
import Button from '@ui/button/Button'
import Label from '@ui/text/label/Label'
import { useArray } from '@hooks/useArray'
import { DataImagesSocial, dataImagesSocial } from '@/data/footer'

interface PropsFooter {}

const Footer: React.FC<PropsFooter> = () => {
	const arrImages: DataImagesSocial[] = useArray<DataImagesSocial>(() => dataImagesSocial)

	const clickBackToTop = (): void => {
		window.scrollTo({
			top: 0,
		})
	}

	return (
		<footer className={sass.footer}>
			<Button classes={sass.back} click={clickBackToTop}>
				<Image url={require('@svg/footer/back.svg')} classesWrap={sass.wrap} />
				<span>Вернуться наверх</span>
			</Button>

			<div className={sass.social}>
				{arrImages.map(({ urlImage, altImage, link }, i) => {
					return (
						<Button click={() => window.open(link)} classes={sass['social-button']} key={i}>
							<Image url={urlImage} alt={altImage} classesWrap={sass['social-wrap']} classesImage={sass['social-image']} />
						</Button>
					)
				})}
			</div>

			<Label classes={sass.copyright}>
				<b className={sass['copyright-bold']}>&copy; М.С. Халласаар, 2025</b>
			</Label>
		</footer>
	)
}

export default Footer
