import React, { Fragment, useRef, useState } from 'react';
import { useMonth } from '../../hooks/useMonth';
import EventForm from '../EventForm/EventForm';
import Modal from '../Shared/Modal/Modal';
import './Month.css';

const Month = () => {
	console.log('Month');
	const { date: todaysDate, weekDays, events, addEvent } = useMonth();
	const [ModalOpen, setModalOpen] = useState(false);
	// const todaysDate = new Date(2001, 11);
	const [month, day, year] = [
		todaysDate.getMonth(),
		todaysDate.getDate(),
		todaysDate.getFullYear(),
	];
	const selectedDate = useRef(day);

	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const startOfMonthDay = new Date(year, month, 1).getDay() + 1;
	const openModal = () => {
		setModalOpen(!ModalOpen);
	};

	const getWeeksUi = () => {
		let started = false;
		let currentDay = 0;
		const days = [];
		for (let i = 0; currentDay < daysInMonth; i++) {
			if (i + 1 === startOfMonthDay || started) {
				started = true;
				currentDay++;
				days.push(currentDay);
			} else days.push('');
		}

		const weeksJsx = (
			<Fragment>
				{days.map((d, i) => {
					return (
						<span
							className='day-name'
							key={i}
							onClick={
								d === ''
									? null
									: () => {
											selectedDate.current = d;
											openModal();
									  }
							}>
							{d}
							<label className='month-calendar-events'>
								{events[year] &&
									events[year][month] &&
									events[year][month][d] &&
									events[year][month][d].map((e, i) => (
										<p
											key={i}
											className='month-calendar-event'>
											{e.title}
										</p>
									))}
							</label>
						</span>
					);
				})}
			</Fragment>
		);
		return weeksJsx;
	};
	return (
		<div className='month-calendar-container'>
			{ModalOpen && (
				<Modal
					closeModal={() => setModalOpen((state) => !state)}
					children={
						<EventForm
							date={{ month, day: selectedDate.current, year }}
							addEvent={addEvent}
							closeForm={() => setModalOpen((state) => !state)}
						/>
					}
					modalTitle='Add Calendar Event'
				/>
			)}
			<div className='month-calendar'>
				{weekDays.map((weekday, i) => (
					<span className='day-name' key={i}>
						{weekday}
					</span>
				))}
				{getWeeksUi()}
			</div>
		</div>
	);
};

export default Month;
