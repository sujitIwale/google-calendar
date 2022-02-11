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
		events: {
			2022: {
				0: {
					11: [{ title: 'New Task' }, { title: 'New Task' }],
					18: [{ title: 'New Task' }],
					12: [{ title: 'New Task' }],
				},
				11: {
					31: [{ title: 'new year' }],
				},
			},
		},
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
				events: state.events,
				updateDate,
			}}>
			{props.children}
		</MonthContext.Provider>
	);
};

export default MonthState;
