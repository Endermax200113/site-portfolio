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

type FullPlace = {
	startX: number
	endX: number
	startY: number
	endY: number
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
	const [startPlaceCursorX, setStartPlaceCursorX] = useState<number>(0)
	const [startPlaceCursorY, setStartPlaceCursorY] = useState<number>(0)
	const [placeWrapX, setPlaceWrapX] = useState<number>(0)
	const [placeWrapY, setPlaceWrapY] = useState<number>(0)
	const [originalSizeImageWidth, setOriginalSizeImageWidth] = useState<number>(0)
	const [originalSizeImageHeight, setOriginalSizeImageHeight] = useState<number>(0)
	const [sizeWrapWidth, setSizeWrapWidth] = useState<number>(0)
	const [sizeWrapHeight, setSizeWrapHeight] = useState<number>(0)
	const [placeImage, setPlaceImage] = useState<FullPlace>({
		startX: 0,
		endX: 0,
		startY: 0,
		endY: 0,
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
			const widthImage = placeImage.endX - placeImage.startX
			const heightImage = placeImage.endY - placeImage.startY

			const nowX: number = e.clientX
			const nowY: number = e.clientY
			const resX: number = nowX - startPlaceCursorX
			const resY: number = nowY - startPlaceCursorY

			const allowStartX: boolean = placeImage.startX + resX <= sizeWrapWidth
			const allowEndX: boolean = placeImage.endX + resX >= 0
			const allowStartY: boolean = placeImage.startY + resY <= sizeWrapHeight
			const allowEndY: boolean = placeImage.endY + resY >= 0

			let resStartX: number = 0
			let resEndX: number = 0
			let resWrapX: number = 0
			let resStartY: number = 0
			let resEndY: number = 0
			let resWrapY: number = 0

			if (allowStartX && allowEndX) {
				resStartX = placeImage.startX + resX
				resEndX = placeImage.endX + resX
				resWrapX = placeWrapX + resX
			} else if (!allowStartX) {
				resStartX = sizeWrapWidth
				resEndX = sizeWrapWidth + widthImage
				resWrapX = sizeWrapWidth - (sizeWrapWidth - widthImage) / 2
			} else if (!allowEndX) {
				resStartX = -widthImage
				resEndX = 0
				resWrapX = (sizeWrapWidth - widthImage) / 2 - sizeWrapWidth
			}

			if (allowStartY && allowEndY) {
				resStartY = placeImage.startY + resY
				resEndY = placeImage.endY + resY
				resWrapY = placeWrapY + resY
			} else if (!allowStartY) {
				resStartY = sizeWrapHeight
				resEndY = sizeWrapHeight + heightImage
				resWrapY = sizeWrapHeight - (sizeWrapHeight - heightImage) / 2
			} else if (!allowEndY) {
				resStartY = -heightImage
				resEndY = 0
				resWrapY = (sizeWrapHeight - heightImage) / 2 - sizeWrapHeight
			}

			setPlaceWrapX(resWrapX)
			setPlaceWrapY(resWrapY)
			setPlaceImage({
				startX: resStartX,
				endX: resEndX,
				startY: resStartY,
				endY: resEndY,
			})
			setStartPlaceCursorX(nowX)
			setStartPlaceCursorY(nowY)
		}
	}

	const onStartMoveImage = (e: MouseEvent): void => {
		setIsHiddenUIElements('hidden')
		setIsMovingImage(true)
		setStartPlaceCursorX(e.clientX)
		setStartPlaceCursorY(e.clientY)
	}

	const onEndMoveImage = (): void => {
		setIsHiddenUIElements('')
		setIsMovingImage(false)
	}

	const computePlaceImage = useCallback((): void => {
		//#region short vars
		const oWI: number = originalSizeImageWidth
		const oHI: number = originalSizeImageHeight
		const wW: number = sizeWrapWidth
		const hW: number = sizeWrapHeight
		const halfWidthWrap: number = sizeWrapWidth / 2
		const halfHeightWrap: number = sizeWrapHeight / 2
		const bHI: number = (hW * 100) / ((wW * 100) / oWI) // * borderHeightImage
		//#endregion

		//#region functions
		const setPlace = (startX: number, endX: number, startY: number, endY: number): void => {
			setPlaceImage({
				startX: startX,
				endX: endX,
				startY: startY,
				endY: endY,
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
			const halfOriginalHeight: number = getHalf(oHI)
			const startYImage: number = halfHeightWrap - halfOriginalHeight
			const endYImage: number = startYImage + oHI

			setPlace(0, wW, startYImage, endYImage)
		}

		const callOptimizeOriginalWidth = (): void => {
			const halfOriginalWidth: number = getHalf(oWI)
			const startXImage: number = halfWidthWrap - halfOriginalWidth
			const endXImage: number = startXImage + oWI

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
	}, [originalSizeImageWidth, originalSizeImageHeight, sizeWrapWidth, sizeWrapHeight])

	useEffect(() => {
		const image: HTMLImageElement = document.querySelector(`.${sass.image}`) as HTMLImageElement
		const tempImage: HTMLImageElement = new Image()
		tempImage.src = image.src

		setOriginalSizeImageWidth(tempImage.width)
		setOriginalSizeImageHeight(tempImage.height)
		setSizeWrapWidth(window.outerWidth)
		setSizeWrapHeight(image.height)
		computePlaceImage()
	}, [idGallery, computePlaceImage])

	useEffect(() => {
		const body: HTMLBodyElement = document.querySelector('.body') as HTMLBodyElement

		const close = (): void => {
			body.classList.remove('no-scroll')
		}

		if (isOpened) {
			setStartPlaceCursorX(0)
			setStartPlaceCursorY(0)
			setPlaceWrapX(0)
			setPlaceWrapY(0)

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
						left: placeWrapX,
						right: -placeWrapX,
						top: placeWrapY,
						bottom: -placeWrapY,
					}}
				>
					<img src={gallery[idGallery].urlImage} alt={gallery[idGallery].title} className={sass.image} />
				</div>
			</div>

			<div className={sass['test-image']}>
				<div className={sass['test-image-sx']} style={{ left: placeImage.startX }}></div>
				<div className={sass['test-image-ex']} style={{ left: placeImage.endX }}></div>
				<div className={sass['test-image-sy']} style={{ top: placeImage.startY }}></div>
				<div className={sass['test-image-ey']} style={{ top: placeImage.endY }}></div>
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
