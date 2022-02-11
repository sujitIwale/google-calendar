import React from 'react';
import './Header.css';

const Header = () => {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const date = new Date();
	const [month, day, year] = [
		date.getMonth(),
		date.getDate(),
		date.getFullYear(),
	];
	return (
		<div className='header-main'>
			<ul className='header-items '>
				<li className='header-title'>
					<img
						alt='logo'
						src='https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_10_2x.png'
					/>
					<h1>Calendar</h1>
				</li>
				<li className='header-selection'>
					<h2>
						{day + ' '}
						{months[month] + ' '} {year + ' '}
					</h2>
				</li>
				<li className='header-profile'>
					<img
						alt='profile'
						src='https://cdn3.vectorstock.com/i/1000x1000/08/37/profile-icon-male-user-person-avatar-symbol-vector-20910837.jpg'
					/>
				</li>
			</ul>
		</div>
	);
};

export default Header;
