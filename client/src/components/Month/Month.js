import React, { Fragment, useState } from 'react';
import { useMonth } from '../../hooks/useMonth';
import EventForm from '../EventForm/EventForm';
import Modal from '../Shared/Modal/Modal';
import './Month.css';

const Month = () => {
	const { date: todaysDate, weekDays, events } = useMonth();
	const [ModalOpen, setModalOpen] = useState(false);

	// const todaysDate = new Date(2001, 11);
	const [month, day, year] = [
		todaysDate.getMonth(),
		todaysDate.getDate(),
		todaysDate.getFullYear(),
	];
	console.log(month);
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const startOfMonthDay = new Date(year, month, 1).getDay() + 1;
	console.log(startOfMonthDay, daysInMonth);
	const openModal = () => {
		setModalOpen(!ModalOpen);
	};
	console.log(year, month);
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
				{days.map((d) => {
					return (
						<span
							className='day-name'
							onClick={d === '' ? null : openModal}>
							{d}
							<label className='month-calendar-events'>
								{events[year] &&
									events[year][month] &&
									events[year][month][d] &&
									events[year][month][d].map((e) => (
										<p className='month-calendar-event'>
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
					children={<EventForm />}
				/>
			)}
			<div className='month-calendar'>
				{weekDays.map((weekday) => (
					<span className='day-name'>{weekday}</span>
				))}
				{getWeeksUi()}
			</div>
		</div>
	);
};

export default Month;
