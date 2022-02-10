import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<div className='header-main'>
			<ul className='header-items '>
				<li className='header-title'>
					<img
						alt='logo'
						src='https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_10_2x.png'
					/>
					<h1>Calender</h1>
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
