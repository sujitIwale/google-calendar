import React, { Fragment } from 'react';
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
	const todaysDate = new Date();
	const [month, day, year] = [
		todaysDate.getMonth(),
		todaysDate.getDate(),
		todaysDate.getFullYear(),
	];
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const startOfMonthDay = new Date(year, month, 1).getDay() + 1;
	console.log(startOfMonthDay, daysInMonth);

	const getWeeksUi = () => {
		let started = false;
		let currentDay = 0;
		const days = [];
		for (let i = 0; currentDay < daysInMonth; i++) {
			console.log('first');
			if (i + 1 === startOfMonthDay || started) {
				started = true;
				currentDay++;
				days.push(currentDay);
			} else days.push('');
		}

		const weeksJsx = (
			<Fragment>
				{days.map((day) => (
					<span className='day-name'>{day}</span>
				))}
			</Fragment>
		);
		return weeksJsx;
	};
	return (
		<div className='month-calendar-container'>
			<div className='month-calendar'>
				{weeekDayas.map((weekday) => (
					<span className='day-name'>{weekday}</span>
				))}
				{getWeeksUi()}
			</div>
		</div>
	);
};

export default Month;
