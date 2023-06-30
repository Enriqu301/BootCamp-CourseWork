import React from 'react';
import ReactDOM from 'react-dom';
import MovieComponent from './components/MovieComponent';
import movies from './data';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div>
      {movies.map(movie => (
        <MovieComponent 
        key={movie.title} 
        title={movie.title} 
        director={movie.director} 
        cast={movie.cast}
        image={movie.image}/>
      ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
