import './assets/sass/App.sass'
import Header from './components/header/Header'
import Main from './components/main/Main'

const App: React.FC = (): React.JSX.Element => {
	return (
		<div className='app'>
			<Header />
			<Main />
		</div>
	)
}

export default App
