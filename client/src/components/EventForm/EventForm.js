import React, { useState } from 'react';
import Button from '../Shared/Button/Button';
import './EventForm.css';

const EventForm = ({
	date,
	addEvent,
	updateEvent,
	deleteEvent,
	closeForm,
	eventData,
	type,
}) => {
	// console.log(event);
	let event;
	if (type === 'update') {
		event = eventData.event;
	}
	const [Event, setEvent] = useState(() => ({
		title: event && typeof event.title === 'string' ? event.title : '',
		description:
			event && typeof event.description === 'string'
				? event.description
				: '',
	}));
	const onChangeHandler = (e) => {
		setEvent({ ...Event, [e.target.name]: e.target.value });
	};
	const onSave = () => {
		if (Event.title === '') return;
		// console.log(Event);
		if (type === 'update') {
			updateEvent(Event, date, eventData.eventIndex);
		} else addEvent(Event, date);

		closeForm();
	};
	const onDelete = () => {
		deleteEvent(Event, date, eventData.eventIndex);
		closeForm();
	};
	return (
		<div className='event-form-container'>
			<label className='input-labels'>Event Title</label>
			<input
				type='text'
				name='title'
				value={Event.title}
				autoFocus
				onChange={onChangeHandler}
			/>
			<label className='input-labels'>Event Description</label>
			<textarea
				name='description'
				value={Event.description}
				onChange={onChangeHandler}
			/>
			<div className='event-form-add-btn-wrapper'>
				<Button textValue='Save' bgColor={'#1a9ebe'} onClick={onSave} />
				{type === 'update' && (
					<Button
						textValue='Delete'
						bgColor={'rgb(250, 33, 33)'}
						onClick={onDelete}
					/>
				)}
			</div>
		</div>
	);
};

export default EventForm;
