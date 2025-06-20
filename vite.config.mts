import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'

const getPath = (dir: string): string => path.resolve(__dirname, dir)

export default defineConfig(configEnv => {
	return {
		plugins: [react(), chunkSplitPlugin()],
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
			rollupOptions: {
				output: {
					manualChunks: id => {
						if (id.includes('node_modules')) {
							return id.toString().split('node_modules')[1].split('/')[0].toString()
						}
					},
				},
			},
			target: 'es2022',
		},
		server: {
			port: 3000,
		},
		css: {
			devSourcemap: configEnv.mode === 'development',
		},
		optimizeDeps: {
			include: ['cookie'],
			esbuildOptions: {
				target: 'es2022',
				supported: {
					'top-level-wait': configEnv.mode === 'production',
				},
			},
		},
	}
})
