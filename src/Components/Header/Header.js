import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';

const Header = () => {
	return (
		<div className="header">
			<div className="logo">Some logo</div>
			<nav className="main_nav">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About us</NavLink>
				<NavLink to="/contacts">Contacts</NavLink>
			</nav>
		</div>
	);
};

export default Header;