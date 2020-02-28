import React, { Component } from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import "./App.css";
// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const {data: {data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false });    
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;    
    return (
      <React.Fragment>
      <div className="header"></div>
      <section className="container">
        { isLoading 
        ? (
          
          <div className="loader">
            <span className="loader_text">Loading...</span>
            <div className="loading_circle">
              <div></div>
              <div></div>              
            </div>
          </div>
        ) :  (
          <div className="movies">
            {movies.map( movie => 
              (<Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres}/>)
            )}
          </div>
        )}        
      </section>
      </React.Fragment>
    );
  }  
}

export default App;
