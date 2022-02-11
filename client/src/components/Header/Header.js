import React from 'react';
import { useMonth } from '../../hooks/useMonth';
import './Header.css';

const Header = () => {
	const { date, updateDate, months } = useMonth();

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
				<li className='header-month'>
					<i
						className='fa-solid fa-angle-left pointer'
						onClick={() =>
							updateDate(date.setMonth(date.getMonth() - 1))
						}></i>
					<h2>
						{months[month] + ' '} {year + ' '}
					</h2>
					<i
						className='fa-solid fa-angle-right pointer'
						onClick={() =>
							updateDate(date.setMonth(date.getMonth() + 1))
						}></i>
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
