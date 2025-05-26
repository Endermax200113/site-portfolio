export const getRemByPx = (px: number): number => px / 16

export const getWidthScreen = (): number => {
	const rootFontSizeStr: string = window.getComputedStyle(document.documentElement).fontSize
	const rootFontSizeNum: string = rootFontSizeStr.replace('px', '')
	const oneRem: number = Number.parseInt(rootFontSizeNum)

	const widthScreen: number = window.screen.width

	return widthScreen / oneRem
}
