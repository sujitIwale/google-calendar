import React from 'react';

const Events = ({ events, year, month, d, onClick }) => {
	return (
		<label className='month-calendar-events'>
			{Object.values(events[year][month][d]).map((e, i) => {
				if (!e.title) return null;
				else
					return (
						<span
							onClick={(event) => {
								console.log(e);
								onClick(event, e, i + 1, d);
							}}
							key={i}
							className='month-calendar-event'>
							{e.title}
						</span>
					);
			})}
		</label>
	);
};

export default Events;
