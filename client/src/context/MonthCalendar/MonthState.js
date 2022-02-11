import { createContext, useReducer } from 'react';
import { UPDATE_DATE } from '../types';
import MonthReducer from './MonthReducer';

export const MonthContext = createContext();

const MonthState = (props) => {
	const initialState = {
		date: new Date(),
		months: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
		weekDays: [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		],
	};

	const [state, dispatch] = useReducer(MonthReducer, initialState);
	console.log(state.date);
	const updateDate = (date) => {
		dispatch({ type: UPDATE_DATE, payload: date });
	};

	return (
		<MonthContext.Provider
			value={{
				date: state.date,
				months: state.months,
				weekDays: state.weekDays,
				updateDate,
			}}>
			{props.children}
		</MonthContext.Provider>
	);
};

export default MonthState;
