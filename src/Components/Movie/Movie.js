import React from 'react';
import './Movie.css';

const Movie = props => {
	return (
		<div className="movie">
			<h4>{props.title}</h4>
			<img src={props.image} alt=""/>
			<p><b>Год выхода на экран: </b>{props.year}</p>
		</div>
	);
};

export default Movie;