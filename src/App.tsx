import './assets/sass/App.sass'
import Header from './components/header/Header'

const App: React.FC = (): JSX.Element => {
	return (
		<div className="App">
			<Header real />
			<Header />

			<main className="main">
				
			</main>
		</div>
	);
}

export default App;
