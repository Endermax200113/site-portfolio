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
			<Button className={sass.back} onClick={clickBackToTop}>
				<Image url={require('@svg/footer/back.svg')} classWrap={sass.wrap} />
				<span>Вернуться наверх</span>
			</Button>

			<div className={sass.social}>
				{arrImages.map(({ urlImage, altImage, link }, i) => {
					return (
						<Button onClick={() => window.open(link)} className={sass['social-button']} key={i}>
							<Image url={urlImage} alt={altImage} classWrap={sass['social-wrap']} className={sass['social-image']} />
						</Button>
					)
				})}
			</div>

			<Label className={sass.copyright}>
				<b className={sass['copyright-bold']}>&copy; М.С. Халласаар, 2025</b>
			</Label>
		</footer>
	)
}

export default Footer
