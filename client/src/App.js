import './App.css';
import Calendar from './components/Calendar/Calendar';
import Header from './components/Header/Header';

function App() {
	return (
		<div className='App'>
			<Header />
			<section className='right-section'>
				<Calendar />
			</section>
		</div>
	);
}

export default App;
