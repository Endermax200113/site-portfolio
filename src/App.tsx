import './assets/sass/App.sass'
import Header from './components/header/Header'

const App: React.FC = (): React.JSX.Element => {
	return (
		<div className='app'>
			<Header />
		</div>
	)
}

export default App
