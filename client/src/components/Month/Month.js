import React, { Fragment, useRef, useState } from 'react';
import { useMonth } from '../../hooks/useMonth';
import EventForm from '../EventForm/EventForm';
import Modal from '../Shared/Modal/Modal';
import Events from './Events';
import './Month.css';

const Month = () => {
	console.log('Month');
	const {
		date: todaysDate,
		weekDays,
		events,
		addEvent,
		updateEvent,
		deleteEvent,
	} = useMonth();
	// const [ModalOpen, setModalOpen] = useState(false);
	const [Form, setForm] = useState({
		opened: false,
		for: 'add',
		event: null,
	});

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
		setForm({ opened: true, for: 'add', event: null });
	};
	const closeModal = () => {
		setForm({ opened: false, for: 'add', event: null });
	};
	const eventClickHandler = (e, event, eventIndex, d) => {
		e.stopPropagation();
		selectedDate.current = d;
		// console.log(event);
		setForm({ opened: true, for: 'update', event: { event, eventIndex } });
	};
	const getEventForm = () => {
		if (Form.for === 'add') {
			return (
				<EventForm
					date={{ month, day: selectedDate.current, year }}
					addEvent={addEvent}
					closeForm={closeModal}
				/>
			);
		} else if (Form.for === 'update') {
			return (
				<EventForm
					date={{ month, day: selectedDate.current, year }}
					type='update'
					updateEvent={updateEvent}
					deleteEvent={deleteEvent}
					closeForm={closeModal}
					eventData={Form.event}
				/>
			);
		}
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
							{events[year] &&
								events[year][month] &&
								events[year][month][d] &&
								Object.keys(events[year][month][d]).length >
									0 && (
									<Events
										events={events}
										year={year}
										month={month}
										d={d}
										onClick={eventClickHandler}
									/>
								)}
						</span>
					);
				})}
			</Fragment>
		);
		return weeksJsx;
	};
	return (
		<div className='month-calendar-container'>
			{Form.opened && (
				<Modal closeModal={closeModal} modalTitle='Add Calendar Event'>
					{getEventForm()}
				</Modal>
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
