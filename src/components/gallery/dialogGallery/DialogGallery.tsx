import React, { DialogHTMLAttributes, MouseEvent, useCallback, useEffect, useState } from 'react'
import sass from './DialogGallery.module.sass'
import Button from '@ui/button/Button'
import ImageComp from '@ui/image/Image'
import { Gallery } from '@helper/portfolio'
import { trimSass } from '@utils/sassControl'
import Description from '@ui/text/description/Description'
import { useEventListener } from '@hooks/useEventListener'

type StateDialogIsOpened = [isOpened: boolean, setIsOpened: React.Dispatch<React.SetStateAction<boolean>>]
type StateDialogId = [idGallery: number, setIdGallery: React.Dispatch<React.SetStateAction<number>>]

type PlaceImage = {
	startXImage: number
	endXImage: number
	startYImage: number
	endYImage: number
}

interface PropsDialogGallery extends DialogHTMLAttributes<HTMLDialogElement> {
	gallery: Gallery[]
	stateIdGallery: StateDialogId
	stateIsOpened: StateDialogIsOpened
}

const DialogGallery: React.FC<PropsDialogGallery> = ({ gallery, stateIdGallery, stateIsOpened }) => {
	//#region states
	const [idGallery, setIdGallery]: StateDialogId = [stateIdGallery[0], stateIdGallery[1]]
	const [isOpened, setIsOpened]: StateDialogIsOpened = [stateIsOpened[0], stateIsOpened[1]]
	const [isMovingImage, setIsMovingImage] = useState<boolean>(false)
	const [isHiddenUIElements, setIsHiddenUIElements] = useState<string>('')
	const [startX, setStartX] = useState<number>(0)
	const [startY, setStartY] = useState<number>(0)
	const [xWrap, setXWrap] = useState<number>(0)
	const [yWrap, setYWrap] = useState<number>(0)
	const [originalWidthImage, setOriginalWidthImage] = useState<number>(0)
	const [originalHeightImage, setOriginalHeightImage] = useState<number>(0)
	const [widthWrap, setWidthWrap] = useState<number>(0)
	const [heightWrap, setHeightWrap] = useState<number>(0)
	const [placeImage, setPlaceImage] = useState<PlaceImage>({
		startXImage: 0,
		endXImage: 0,
		startYImage: 0,
		endYImage: 0,
	})
	//#endregion

	const onClickLeft = useCallback((): void => {
		if (idGallery + 1 === 1) return

		setIdGallery(idGallery - 1)
	}, [idGallery, setIdGallery])

	const onClickRight = useCallback((): void => {
		if (idGallery + 1 === gallery.length) return

		setIdGallery(idGallery + 1)
	}, [idGallery, gallery, setIdGallery])

	const onKeyDownLeftOrRight = (e: KeyboardEvent): void => {
		if (e.code !== 'ArrowLeft' && e.code !== 'ArrowRight') return

		if (e.code === 'ArrowLeft') {
			onClickLeft()
		} else {
			onClickRight()
		}
	}

	useEventListener('keydown', onKeyDownLeftOrRight, isOpened)

	const onMoveImage = (e: MouseEvent): void => {
		if (isMovingImage) {
			const widthImage = placeImage.endXImage - placeImage.startXImage
			const heightImage = placeImage.endYImage - placeImage.startYImage

			const nowX: number = e.clientX
			const nowY: number = e.clientY
			const resX: number = nowX - startX
			const resY: number = nowY - startY

			const allowStartX: boolean = placeImage.startXImage + resX <= widthWrap
			const allowEndX: boolean = placeImage.endXImage + resX >= 0
			const allowStartY: boolean = placeImage.startYImage + resY <= heightWrap
			const allowEndY: boolean = placeImage.endYImage + resY >= 0

			let resStartX: number = 0
			let resEndX: number = 0
			let resWrapX: number = 0
			let resStartY: number = 0
			let resEndY: number = 0
			let resWrapY: number = 0

			if (allowStartX && allowEndX) {
				resStartX = placeImage.startXImage + resX
				resEndX = placeImage.endXImage + resX
				resWrapX = xWrap + resX
			} else if (!allowStartX) {
				resStartX = widthWrap
				resEndX = widthWrap + widthImage
				resWrapX = widthWrap - (widthWrap - widthImage) / 2
			} else if (!allowEndX) {
				resStartX = -widthImage
				resEndX = 0
				resWrapX = (widthWrap - widthImage) / 2 - widthWrap
			}

			if (allowStartY && allowEndY) {
				resStartY = placeImage.startYImage + resY
				resEndY = placeImage.endYImage + resY
				resWrapY = yWrap + resY
			} else if (!allowStartY) {
				resStartY = heightWrap
				resEndY = heightWrap + heightImage
				resWrapY = heightWrap - (heightWrap - heightImage) / 2
			} else if (!allowEndY) {
				resStartY = -heightImage
				resEndY = 0
				resWrapY = (heightWrap - heightImage) / 2 - heightWrap
			}

			setXWrap(resWrapX)
			setYWrap(resWrapY)
			setPlaceImage({
				startXImage: resStartX,
				endXImage: resEndX,
				startYImage: resStartY,
				endYImage: resEndY,
			})
			setStartX(nowX)
			setStartY(nowY)
		}
	}

	const onStartMoveImage = (e: MouseEvent): void => {
		setIsHiddenUIElements('hidden')
		setIsMovingImage(true)
		setStartX(e.clientX)
		setStartY(e.clientY)
	}

	const onEndMoveImage = (): void => {
		setIsHiddenUIElements('')
		setIsMovingImage(false)
	}

	const onScrollImage = (e: Event): void => {
		console.log('!!!', e)
	}

	useEventListener('wheel', onScrollImage, isOpened)

	const computePlaceImage = useCallback((): void => {
		//#region short vars
		const oWI: number = originalWidthImage
		const oHI: number = originalHeightImage
		const wW: number = widthWrap
		const hW: number = heightWrap
		const halfWidthWrap: number = widthWrap / 2
		const halfHeightWrap: number = heightWrap / 2
		const bHI: number = (hW * 100) / ((wW * 100) / oWI) // * borderHeightImage
		//#endregion

		//#region functions
		const setPlace = (startX: number, endX: number, startY: number, endY: number): void => {
			setPlaceImage({
				startXImage: startX,
				endXImage: endX,
				startYImage: startY,
				endYImage: endY,
			})
		}

		const getPercent = (pxWithoutPercent: number, pxWithPercent: number): number => {
			return (pxWithoutPercent * 100) / pxWithPercent
		}

		const getOptimalWidth = (percent: number, oHIIsWithPercent: boolean): number => {
			return oHIIsWithPercent ? (oWI * percent) / 100 : (oWI * 100) / percent
		}

		const getOptimalHeight = (percent: number): number => (oHI * percent) / 100

		const getHalf = (pxOfSomething: number): number => pxOfSomething / 2
		//#endregion

		//#region calls
		const justSetPlace = (): void => setPlace(0, wW, 0, hW)

		const callOptimizeWidth = (): void => {
			const percent: number = getPercent(hW, oHI)
			const optimalWidthPx: number = getOptimalWidth(percent, true)

			const halfOptimalWidth: number = getHalf(optimalWidthPx)
			const startXImage: number = halfWidthWrap - halfOptimalWidth
			const endXImage: number = startXImage + optimalWidthPx

			setPlace(startXImage, endXImage, 0, hW)
		}

		const callOptWidthOHIWithoutPer = (): void => {
			const percent: number = getPercent(oHI, hW)
			const optimalWidthPx: number = getOptimalWidth(percent, false)

			const halfOptimalWidth: number = getHalf(optimalWidthPx)
			const startXImage: number = halfWidthWrap - halfOptimalWidth
			const endXImage: number = startXImage + optimalWidthPx

			setPlace(startXImage, endXImage, 0, hW)
		}

		const callOptimizeOriginalHeight = (): void => {
			const halfOriginalHeight: number = originalHeightImage / 2
			const startYImage: number = halfHeightWrap - halfOriginalHeight
			const endYImage: number = startYImage + originalHeightImage

			setPlace(0, wW, startYImage, endYImage)
		}

		const callOptimizeOriginalWidth = (): void => {
			const halfOriginalWidth: number = getHalf(originalWidthImage)
			const startXImage: number = halfWidthWrap - halfOriginalWidth
			const endXImage: number = startXImage + originalWidthImage

			setPlace(startXImage, endXImage, 0, hW)
		}

		const callOptimizeHeight = (): void => {
			const percent: number = getPercent(wW, oWI)
			const optimalHeightPx: number = getOptimalHeight(percent)

			const halfOptimalHeight: number = getHalf(optimalHeightPx)
			const startYImage: number = halfHeightWrap - halfOptimalHeight
			const endYImage: number = startYImage + optimalHeightPx

			setPlace(0, wW, startYImage, endYImage)
		}
		//#endregion

		//#region conditions
		if (oHI > hW && (oWI <= wW || (oWI > wW && oHI > bHI))) {
			callOptimizeWidth()
		} else if ((oWI === wW && oHI === hW) || (oWI > wW && oHI > hW && oHI === bHI)) {
			justSetPlace()
		} else if (oWI > wW && (oHI <= hW || (oHI > hW && oHI < bHI))) {
			callOptimizeHeight()
		} else if (oWI === wW && oHI < hW) {
			callOptimizeOriginalHeight()
		} else if (oWI < wW && oHI === hW) {
			callOptimizeOriginalWidth()
		} else if (oWI < wW && oHI < hW) {
			callOptWidthOHIWithoutPer()
		}
		//#endregion
	}, [originalHeightImage, heightWrap, originalWidthImage, widthWrap])

	useEffect(() => {
		const image: HTMLImageElement = document.querySelector(`.${sass.image}`) as HTMLImageElement
		const tempImage: HTMLImageElement = new Image()
		tempImage.src = image.src

		setOriginalWidthImage(tempImage.width)
		setOriginalHeightImage(tempImage.height)
		setWidthWrap(window.outerWidth)
		setHeightWrap(image.height)
		computePlaceImage()
	}, [idGallery, computePlaceImage])

	useEffect(() => {
		const body: HTMLBodyElement = document.querySelector('.body') as HTMLBodyElement

		const close = (): void => {
			body.classList.remove('no-scroll')
		}

		if (isOpened) {
			setStartX(0)
			setStartY(0)
			setXWrap(0)
			setYWrap(0)

			body.classList.add('no-scroll')
		} else {
			close()
		}

		return close
	}, [isOpened])

	return (
		<dialog className={sass.gallery} open={isOpened}>
			<div className={sass['image-container']} onMouseDown={onStartMoveImage} onMouseMove={onMoveImage} onMouseUp={onEndMoveImage}>
				<div
					className={sass['image-wrap']}
					style={{
						left: xWrap,
						right: -xWrap,
						top: yWrap,
						bottom: -yWrap,
					}}
				>
					<img src={gallery[idGallery].urlImage} alt={gallery[idGallery].title} className={sass.image} />
				</div>
			</div>

			<div className={sass['test-image']}>
				<div className={sass['test-image-sx']} style={{ left: placeImage.startXImage }}></div>
				<div className={sass['test-image-ex']} style={{ left: placeImage.endXImage }}></div>
				<div className={sass['test-image-sy']} style={{ top: placeImage.startYImage }}></div>
				<div className={sass['test-image-ey']} style={{ top: placeImage.endYImage }}></div>
			</div>

			<Button classes={trimSass(sass, ['button', isHiddenUIElements])} click={() => setIsOpened(false)}>
				<ImageComp url={require('@svg/cross.svg')} alt='Закрыть' />
			</Button>

			<div className={trimSass(sass, ['gradient', isHiddenUIElements])}></div>

			<div className={sass.management}>
				<div className={trimSass(sass, ['management-buttons', isHiddenUIElements])}>
					{idGallery !== 0 && (
						<Button classes={trimSass(sass, ['management-button', 'left'])} click={onClickLeft}>
							<ImageComp url={require('@svg/arrow-left.svg')} />
						</Button>
					)}

					<span className={sass['management-count']}>
						{idGallery + 1} из {gallery.length}
					</span>

					{idGallery + 1 !== gallery.length && (
						<Button classes={trimSass(sass, ['management-button', 'right'])} click={onClickRight}>
							<ImageComp url={require('@svg/arrow-right.svg')} />
						</Button>
					)}
				</div>

				<Description classes={trimSass(sass, ['management-description', isHiddenUIElements])}>{gallery[idGallery].description}</Description>
			</div>
		</dialog>
	)
}

export default DialogGallery
