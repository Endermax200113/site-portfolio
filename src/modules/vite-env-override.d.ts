declare module '*.svg' {
	import * as React from ('react')

	const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {title?: string}>
	const src: string
	type SVG = {
		ReactComponent
		default: src
	}

	export default src
}

declare module '*.png' {
	const src: string

	export default src
}
