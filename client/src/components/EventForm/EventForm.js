import React, { useState } from 'react';
import Button from '../Shared/Button/Button';
import './EventForm.css';

const EventForm = ({ date, addEvent, closeForm }) => {
	const [Event, setEvent] = useState({
		title: '',
		description: '',
	});
	const onChangeHandler = (e) => {
		setEvent({ ...Event, [e.target.name]: e.target.value });
	};
	const onSave = () => {
		if (Event.title === '') return;

		addEvent(Event, date);
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
			</div>
		</div>
	);
};

export default EventForm;
