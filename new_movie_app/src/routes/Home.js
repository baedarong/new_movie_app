import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = { //선언일 뿐 꼭 다 사용할 필요는 없다
    isLoading : true,
    movies: []
  }; 
  getMovies = async () => { // 비동기 -> 기다리라고 명령함 (await )
    const {data: {data: {movies}}} = 
      await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false}); // this.setState({movies}); as same
  }
  componentDidMount(){ // render -> componentDidMount() 순서 
    this.getMovies();
  }
  
  render() {
    console.log("render refresh automatically");
    const { isLoading, movies } = this.state;
    return (
      <section className="container"> 
      {isLoading ? 
      <div className="loader">
        <span className="loader_text"> Loading now ... </span>
      </div> : 
      <div className="movies">
        { movies.map(movie => { // variable movie
            // console.log(movie);
            return <Movie  // map() requires return always 
              key= {movie.id}
              id= {movie.id}
              year ={movie.year}
              title= {movie.title}
              summary= {movie.summary}
              rating= {movie.rating}
              poster= {movie.medium_cover_image}
              genres= {movie.genres}
            />}
        )}
      </div>
      } </section>
    )
  }
}; 

export default Home;
