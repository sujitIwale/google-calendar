import React from 'react';
import Month from '../Month/Month';
import './Calendar.css';

const Calendar = () => {
	return (
		<section className='right-section calendar-main'>
			<Month />
		</section>
	);
};

export default Calendar;
