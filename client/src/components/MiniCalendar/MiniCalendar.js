import React from 'react';
import { useMonth } from '../../hooks/useMonth';
import './MiniCalendar.css';

const MiniCalendar = () => {
	const { weekDays, date, months, updateDate } = useMonth();
	const [month, day, year] = [
		date.getMonth(),
		date.getDate(),
		date.getFullYear(),
	];
	return (
		<div className='minicalendar-container'>
			<div className='minicalendar-header'>
				<div className='minicalendar-header-year'>
					<span>{months[month] + ' ' + year}</span>
				</div>
				<div className='header-month-change'>
					<i
						className='fa-solid fa-angle-left pointer'
						onClick={() =>
							updateDate(date.setMonth(date.getMonth() - 1))
						}></i>
					<i
						className='fa-solid fa-angle-right pointer'
						onClick={() =>
							updateDate(date.setMonth(date.getMonth() + 1))
						}></i>
				</div>
			</div>
			<div className='minicalendar'>
				{weekDays.map((weekday, i) => (
					<span className='minicalendar-week-name'>
						{String(weekday)[0]}
					</span>
				))}
			</div>
		</div>
	);
};

export default MiniCalendar;
