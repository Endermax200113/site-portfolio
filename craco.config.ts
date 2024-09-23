import path from 'path'

export default {
	webpack: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@fonts': path.resolve(__dirname, 'src/assets/fonts'),
			'@img': path.resolve(__dirname, 'src/assets/img'),
			'@sass': path.resolve(__dirname, 'src/assets/sass'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@ui': path.resolve(__dirname, 'src/components/ui'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@helper': path.resolve(__dirname, 'src/helper'),
		},
	},
}
