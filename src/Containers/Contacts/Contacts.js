import React, {Fragment} from 'react';
import './Contacts.css';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Contacts = () => {
	return (
		<Fragment>
			<Header/>
			<div className="contacts">
				<p>Lorem ipsum dolor sit amet, consectetur.</p>
				<p>Lorem ipsum dolor sit amet, consectetur.</p>
				<p>Lorem ipsum dolor sit amet, consectetur.</p>
			</div>
			<Footer/>
		</Fragment>

	);
};

export default Contacts;