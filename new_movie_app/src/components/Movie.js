import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'
// Each child in a list should have a unique "key" prop.

function Movie({id, title, year, rating , summary, poster, genres}) {
  return (
    <div className="movie">
    <img src={poster} alt={title} title={title}></img>
    <div className="movie__data">
      <h2 className="movie__title">{title}</h2>
      <h4 className="movie__year">{year}</h4>
      <ul className="movie__genres">
          {genres.map((genre, index)=> /* map gives you number arguments*/ (
            <li key={index} className="genres__genre"> {genre} </li>))}
      </ul>
      <p className="movie__summary">{summary.slice(0, 200)} ...</p></div>
    </div>
  )
}

Movie.propTypes = { 
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;