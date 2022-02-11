import './App.css';
import Calendar from './components/Calendar/Calendar';
import Header from './components/Header/Header';
import MonthState from './context/MonthCalendar/MonthState';

function App() {
	return (
		<MonthState>
			<div className='App'>
				<Header />
				<section className='right-section'>
					<Calendar />
				</section>
			</div>
		</MonthState>
	);
}

export default App;
