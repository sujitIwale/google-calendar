import { UPDATE_DATE } from '../types';

const MonthReducer = (state, action) => {
	switch (action.type) {
		case UPDATE_DATE:
			return {
				date: action.payload,
				...state,
			};

		default:
			return state;
	}
};

export default MonthReducer;
