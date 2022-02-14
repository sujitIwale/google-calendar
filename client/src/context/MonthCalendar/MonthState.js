import { createContext, useReducer } from 'react';
import { ADD_EVENT, UPDATE_DATE } from '../types';
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
	const addEvent = (event, date) => {
		const newEvents = JSON.parse(JSON.stringify(state.events));
		if (!newEvents[date.year]) {
			newEvents[date.year] = {};
		}
		if (!newEvents[date.year][date.month]) {
			newEvents[date.year][date.month] = {};
		}
		if (!newEvents[date.year][date.month][date.day]) {
			newEvents[date.year][date.month][date.day] = [];
		}

		newEvents[date.year][date.month][date.day].push(event);
		dispatch({ type: ADD_EVENT, payload: newEvents });
	};
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
				addEvent,
			}}>
			{props.children}
		</MonthContext.Provider>
	);
};

export default MonthState;
