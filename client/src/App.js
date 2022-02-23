import './App.css';
import Calendar from './components/Calendar/Calendar';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MonthState from './context/MonthCalendar/MonthState';

function App() {
	return (
		<div className='App'>
			<MonthState>
				<Header />
				<Sidebar />
				<Calendar />
			</MonthState>
		</div>
	);
}

export default App;
