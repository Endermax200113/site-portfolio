import React, { DialogHTMLAttributes, Dispatch, SetStateAction, useCallback, useLayoutEffect, useState } from 'react'
import scss from './DialogGallery.module.scss'
import Button from '@ui/button/Button'
import ImageComp from '@ui/image/Image'
import { Gallery } from '@helper/portfolio'
import { trimSass } from '@utils/sassControl'
import Description from '@ui/text/description/Description'
import { useEventListener } from '@hooks/useEventListener'
import { useRenderEffect } from '@hooks/useRenderEffect'
import { useClassList } from '@hooks/useClassList'
import ImageGallery from '@ui/image/imageGallery/ImageGallery'

const imgCross: string = (await import('@svg/cross.svg')).default
const imgArrowLeft: string = (await import('@svg/arrow-left.svg')).default
const imgArrowRight: string = (await import('@svg/arrow-right.svg')).default

//
// DONE Решить проблемы с компонентом:
//
// [x] Исправить хук useEventListener, который использует хук useEffect
// [x] Разобраться с передачей аргументов в этот компонент
// [x] Убрать useEffect с компонента
// [x] При необходимости исправить дизайн
//

type FullPlace = {
	startX: number
	endX: number
	startY: number
	endY: number
}

type Image = {
	img: HTMLImageElement
	tempImage: HTMLImageElement
}

type StateDialogGallery = {
	id: number
	isOpened: boolean
}

type ShortState = [data: StateDialogGallery, setData: Dispatch<SetStateAction<StateDialogGallery>>]

interface PropsDialogGallery extends DialogHTMLAttributes<HTMLDialogElement> {
	gallery: Gallery[]
	state: ShortState
}

const DialogGallery: React.FC<PropsDialogGallery> = ({ gallery, state, ...props }) => {
	//#region states
	const [dialogGalleryData, setDialogGalleryData] = state
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
	const [images, setImages] = useState<Image>({
		img: new Image(),
		tempImage: new Image(),
	})
	const [placeImage, setPlaceImage] = useState<FullPlace>({
		startX: 0,
		endX: 0,
		startY: 0,
		endY: 0,
	})
	const [scaleImage, setScaleImage] = useState<number>(1)
	const [initialDistanceMobile, setInitialDistanceMobile] = useState<number>(0)
	//#endregion

	const testImage = false

	const handlerToLeftClick = (): void => {
		if (dialogGalleryData.id + 1 === 1) return

		setDialogGalleryData({
			...dialogGalleryData,
			id: dialogGalleryData.id - 1,
		})
	}

	const handleToRightClick = (): void => {
		if (dialogGalleryData.id + 1 === gallery.length) return

		setDialogGalleryData({
			...dialogGalleryData,
			id: dialogGalleryData.id + 1,
		})
	}

	const handleToLeftOrRightKeydown = (e: Event): void => {
		if (e instanceof KeyboardEvent) {
			if (e.code !== 'ArrowLeft' && e.code !== 'ArrowRight') return

			if (e.code === 'ArrowLeft') {
				handlerToLeftClick()
			} else {
				handleToRightClick()
			}
		}
	}

	useEventListener('keydown', handleToLeftOrRightKeydown, dialogGalleryData.isOpened)

	const onMoveImage = (e: MouseEvent | TouchEvent): void => {
		if (isMovingImage) {
			let clientX: number = 0
			let clientY: number = 0

			if (e instanceof MouseEvent) {
				clientX = e.clientX
				clientY = e.clientY
			} else if (e instanceof TouchEvent) {
				clientX = e.touches[0].clientX
				clientY = e.touches[0].clientY
			}

			if (e instanceof MouseEvent || e.touches.length === 1) {
				const widthImage = placeImage.endX - placeImage.startX
				const heightImage = placeImage.endY - placeImage.startY
	
				const nowX: number = clientX
				const nowY: number = clientY
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
	}

	const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		onMoveImage(e.nativeEvent)
	}

	const handleImageTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
		onMoveImage(e.nativeEvent)
	}

	const onDownImage = (e: MouseEvent | TouchEvent): void => {
		let clientX: number = 0
		let clientY: number = 0

		if (e instanceof MouseEvent) {
			clientX = e.clientX
			clientY = e.clientY
		} else if (e instanceof TouchEvent) {
			clientX = e.touches[0].clientX
			clientY = e.touches[0].clientY
		}

		setIsHiddenUIElements('hidden')
		setIsMovingImage(true)
		setStartPlaceCursorX(clientX)
		setStartPlaceCursorY(clientY)
	}

	const handleImageMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
		onDownImage(e.nativeEvent)
	}

	const handleImageTouchDown = (e: React.TouchEvent<HTMLDivElement>): void => {
		onDownImage(e.nativeEvent)
	}

	const handleImageMoveUp = (): void => {
		setIsHiddenUIElements('')
		setIsMovingImage(false)
	}

	const handleToScaleImage = (event: Event): void => {
		if (event instanceof WheelEvent) {
			const scaleStep = 0.1
			let scaleLevel = scaleImage

			if (event.deltaY < 0) {
				scaleLevel += scaleStep
			} else {
				scaleLevel -= scaleStep
			}

			scaleLevel = Math.min(Math.max(scaleLevel, 0.5), 3)

			setScaleImage(scaleLevel)
		}
	}

	useEventListener('wheel', handleToScaleImage, dialogGalleryData.isOpened)

	const image = document.querySelector(`.${scss['image-container']}`) as HTMLDivElement
	

	const handleImageTouchStart = (e: Event): void => {
		if (e instanceof TouchEvent) {
			if (e.touches.length === 2) {
				const touch1 = e.touches[0]
				const touch2 = e.touches[1]
				const init = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY)
				
				setInitialDistanceMobile(init) 
			}
		}
	}

	useEventListener('touchstart', handleImageTouchStart, dialogGalleryData.isOpened, image, false)

	const onImageTouchMove = (e: Event): void => {
		if (e instanceof TouchEvent) {
			if (e.touches.length === 2 && initialDistanceMobile !== 0) {
				const touch1 = e.touches[0]
				const touch2 = e.touches[1]
				const currentDistance: number = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY)
				const scale = currentDistance / initialDistanceMobile
				const newScale = Math.min(Math.max(scaleImage * scale, 0.75), 3)

				setScaleImage(newScale)
			}
		}
	}

	useEventListener('touchmove', onImageTouchMove, dialogGalleryData.isOpened, image, false)

	const handleImageTouchEnd = (e: Event): void => {
		if (e instanceof TouchEvent) {
			if (e.touches.length < 2) {
				setInitialDistanceMobile(0)
			}
		}
	}

	useEventListener('touchend', handleImageTouchEnd, dialogGalleryData.isOpened, image, false)

	// $ Используется useCallback для работы с хуком useLayoutEffect
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

	// $ Используется useLayoutEffect для корректировки ориентации изображения
	useLayoutEffect(() => {
		const image: HTMLImageElement = document.getElementById('image-gallery-main') as HTMLImageElement
		const tmp: HTMLImageElement = new Image()

		tmp.src = image.src

		setImages({
			img: image,
			tempImage: tmp,
		})
		computePlaceImage()
	}, [computePlaceImage])

	const body: HTMLBodyElement = document.querySelector('.body') as HTMLBodyElement

	const startPosition = (): void => {
		setStartPlaceCursorX(0)
		setStartPlaceCursorY(0)
		setPlaceWrapX(0)
		setPlaceWrapY(0)
	}

	useClassList(body, 'no-scroll', dialogGalleryData.isOpened)

	useRenderEffect(() => {
		if (!dialogGalleryData.isOpened) {
			setTimeout(() => {
				startPosition()
			}, 300)
		} else {
			startPosition()

			setOriginalSizeImageWidth(images.tempImage.width)
			setOriginalSizeImageHeight(images.tempImage.height)
			setSizeWrapWidth(window.outerWidth)
			setSizeWrapHeight(images.img.height)
			setScaleImage(1)
			computePlaceImage()
		}
	}, [dialogGalleryData.id, dialogGalleryData.isOpened])

	const setVisible = (visibility: boolean): void => {
		setDialogGalleryData({
			...dialogGalleryData,
			isOpened: visibility,
		})
	}

	return (
		<dialog
			className={scss.gallery}
			open={dialogGalleryData.isOpened}
			{...props}>
			<div
				className={scss['image-container']}
				onMouseUp={handleImageMoveUp}
				onMouseMove={handleImageMouseMove}
				onMouseDown={handleImageMouseDown}
				onTouchStart={handleImageTouchDown}
				onTouchMove={handleImageTouchMove}
				onTouchEnd={handleImageMoveUp}>
				<ImageGallery
					url={gallery[dialogGalleryData.id].urlImage}
					alt={gallery[dialogGalleryData.id].title}
					id='image-gallery'
					style={{
						left: placeWrapX,
						right: -placeWrapX,
						top: placeWrapY,
						bottom: -placeWrapY,
						transform: `scale(${scaleImage})`,
					}}
				/>
			</div>

			{testImage && (
				<div className={scss['test-image']}>
					<div
						className={scss['test-image-sx']}
						style={{ left: placeImage.startX }}
					/>
					<div
						className={scss['test-image-ex']}
						style={{ left: placeImage.endX }}
					/>
					<div
						className={scss['test-image-sy']}
						style={{ top: placeImage.startY }}
					/>
					<div
						className={scss['test-image-ey']}
						style={{ top: placeImage.endY }}
					/>
				</div>
			)}

			<Button
				className={trimSass(scss, ['button', !dialogGalleryData.isOpened ? 'hidden' : isHiddenUIElements])}
				onClick={() => setVisible(false)}>
				<ImageComp
					url={imgCross}
					alt='Закрыть'
				/>
			</Button>

			<div className={trimSass(scss, ['gradient', !dialogGalleryData.isOpened ? 'hidden' : isHiddenUIElements])} />

			<div className={scss.management}>
				<div className={trimSass(scss, ['management-buttons', !dialogGalleryData.isOpened ? 'hidden' : isHiddenUIElements])}>
					{dialogGalleryData.id !== 0 && (
						<Button
							className={trimSass(scss, ['management-button', 'left'])}
							onClick={handlerToLeftClick}>
							<ImageComp url={imgArrowLeft} />
						</Button>
					)}

					<span className={scss['management-count']}>
						{dialogGalleryData.id + 1} из {gallery.length}
					</span>

					{dialogGalleryData.id + 1 !== gallery.length && (
						<Button
							className={trimSass(scss, ['management-button', 'right'])}
							onClick={handleToRightClick}>
							<ImageComp url={imgArrowRight} />
						</Button>
					)}
				</div>

				<Description className={trimSass(scss, ['management-description', !dialogGalleryData.isOpened ? 'hidden' : isHiddenUIElements])}>{gallery[dialogGalleryData.id].description}</Description>
			</div>
		</dialog>
	)
}

export default DialogGallery
