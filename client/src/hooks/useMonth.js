import { useContext } from 'react';
import { MonthContext } from '../context/MonthCalendar/MonthState';

export const useMonth = () => {
	const monthContext = useContext(MonthContext);

	return monthContext;
};
