import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import commonjs from '@rollup/plugin-commonjs'

const getPath = (dir: string): string => path.resolve(__dirname, dir)

export default defineConfig(configEnv => {
	return {
		plugins: [react(), commonjs()],
		resolve: {
			alias: [
				{ find: '@fonts', replacement: getPath('src/assets/fonts') },
				{ find: '@img', replacement: getPath('src/assets/img') },
				{ find: '@sass', replacement: getPath('src/assets/sass') },
				{ find: '@svg', replacement: getPath('src/assets/svg') },
				{ find: '@assets', replacement: getPath('src/assets') },
				{ find: '@ui', replacement: getPath('src/components/ui') },
				{ find: '@components', replacement: getPath('src/components') },
				{ find: '@utils', replacement: getPath('src/utils') },
				{ find: '@helper', replacement: getPath('src/helper') },
				{ find: '@modules', replacement: getPath('src/modules') },
				{ find: '@hooks', replacement: getPath('src/hooks') },
				{ find: '@', replacement: getPath('src') },
			],
		},
		build: {
			commonjsOptions: {
				transformMixedEsModules: true,
				include: [/node_modules/],
				exclude: [],
			},
			sourcemap: configEnv.mode === 'development',
			minify: configEnv.mode === 'production',
		},
		server: {
			port: 3000,
		},
		css: {
			devSourcemap: configEnv.mode === 'development',
		},
	}
})
