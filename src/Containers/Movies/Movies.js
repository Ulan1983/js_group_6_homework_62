import React, {Component} from 'react';
import Movie from "../../Components/Movie/Movie";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import './Movies.css';

class Movies extends Component {
	render() {
		return (
			<div className="movies">
				<Header/>
				<div className="movies_wrapper">
						<Movie
							title="Зеленая миля"
							year="1999"
							image="https://upload.wikimedia.org/wikipedia/ru/c/ce/Green_mile.jpg"
						/>
						<Movie
							title="Властелин колец"
							year="2001"
							image="https://upload.wikimedia.org/wikipedia/ru/8/89/Bakshi_Lord_of_the_Rings_animated.jpg"
						/>
						<Movie
							title="Криминальное чтиво"
							year="1994"
							image="https://upload.wikimedia.org/wikipedia/ru/9/93/Pulp_Fiction.jpg"
						/>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default Movies;