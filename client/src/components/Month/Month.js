import React from 'react';
import './Month.css';

const Month = () => {
	const weeekDayas = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	return (
		<div className='month-calendar-container'>
			<div className='month-calendar'>
				{weeekDayas.map((weekday) => (
					<span className='day-name'>{weekday}</span>
				))}
				{Array(31)
					.fill('')
					.map((el, i) => (
						<span className='day-name pointer'>{i + 1}</span>
					))}
			</div>
		</div>
	);
};

export default Month;
