import path from 'path'

export default {
	webpack: {
		alias: {
			'@fonts': path.resolve(__dirname, 'src/assets/fonts'),
			'@img': path.resolve(__dirname, 'src/assets/img'),
			'@sass': path.resolve(__dirname, 'src/assets/sass'),
			'@svg': path.resolve(__dirname, 'src/assets/svg'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@ui': path.resolve(__dirname, 'src/components/ui'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@helper': path.resolve(__dirname, 'src/helper'),
			'@': path.resolve(__dirname, 'src'),
		},
	},
}
