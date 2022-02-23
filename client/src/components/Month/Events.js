import React from 'react';

const Events = ({ events, year, month, d, onClick }) => {
	const getEvents = (dayEvents) => {
		let results = [];
		// console.log(dayEvents);
		for (let i = 0; i < dayEvents.length; i++) {
			if (dayEvents[i][0] === 'currentIndex') continue;
			if (i > 2) break;
			const element = (
				<span
					onClick={(event) => {
						// console.log(e);
						onClick(event, dayEvents[i][1], dayEvents[i][0], d);
					}}
					key={i}
					className='month-calendar-event'>
					{dayEvents[i][1].title}
				</span>
			);
			results.push(element);
		}
		return results;
	};
	return (
		<label className='month-calendar-events'>
			{getEvents(Object.entries(events[year][month][d]))}
		</label>
	);
};

export default Events;
