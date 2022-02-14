import { ADD_EVENT, UPDATE_DATE } from '../types';

const MonthReducer = (state, action) => {
	switch (action.type) {
		case UPDATE_DATE:
			return {
				date: action.payload,
				...state,
			};
		case ADD_EVENT:
			return {
				...state,
				events: action.payload,
			};
		default:
			return state;
	}
};

export default MonthReducer;
