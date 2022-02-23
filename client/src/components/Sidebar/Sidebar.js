import React from 'react';
import MiniCalendar from '../MiniCalendar/MiniCalendar';
import './Sidebar.css';

const Sidebar = () => {
	return (
		<aside className='left-section sidebar'>
			<button className='create-btn'>
				<i class='fa-solid fa-plus'></i>Create
			</button>
			<MiniCalendar />
		</aside>
	);
};

export default Sidebar;
