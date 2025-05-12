import { FC, lazy, LazyExoticComponent, Suspense } from 'react'
import '@sass/App.sass'
import { router } from './routes/router'
import { RouterProviderProps } from 'react-router-dom'
import Preloader from '@components/preloader/Preloader'

type Provider = {
	({ fallbackElement, router, future }: RouterProviderProps): React.ReactElement<RouterProviderProps>
}

const RouterProvider: LazyExoticComponent<Provider> = lazy(() =>
	import('react-router-dom').then(module => {
		return new Promise<{ default: Provider }>(fun => {
			fun({ default: module.RouterProvider })
		})
	})
)

const App: FC = () => {
	return (
		<div className='app'>
			<Suspense fallback={<Preloader />}>
				<RouterProvider
					router={router}
					future={{ v7_startTransition: true }}
				/>
			</Suspense>
		</div>
	)
}

export default App
