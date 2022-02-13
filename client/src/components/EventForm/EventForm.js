import React, { useState } from 'react';
import './EventForm.css';

const EventForm = () => {
	const [Event, setEvent] = useState({
		title: '',
		description: '',
	});
	const onChangeHandler = (e) => {
		setEvent({ ...Event, [e.target.name]: e.target.value });
	};
	return (
		<div className='event-form-container'>
			<label className='input-labels'>Event Title</label>
			<input
				type='text'
				name='title'
				value={Event.title}
				onChange={onChangeHandler}
			/>
			<label className='input-labels'>Event Description</label>
			<textarea
				name='description'
				value={Event.description}
				onChange={onChangeHandler}
			/>
		</div>
	);
};

export default EventForm;
