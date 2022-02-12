import React, { useState } from 'react';
import './EventForm.css';

const EventForm = () => {
	const [Event, setEvent] = useState({
		title: '',
	});
	const onChangeHandler = (e) => {
		setEvent({ ...Event, [e.target.name]: e.target.value });
	};
	return (
		<div className='event-form-container'>
			<input
				type='text'
				name='title'
				placeholder='Add Event Title'
				value={Event.title}
				onChange={onChangeHandler}
			/>
			<textarea />
		</div>
	);
};

export default EventForm;
