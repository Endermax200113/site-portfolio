declare module 'SVGImage' {
	import React = require('react')

	const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
	const src: string
	type SVG = {
		ReactComponent
		default: src
	}

	export default SVG
}
