import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';
import { connect } from 'react-redux';
import { onSearch, onBookmark } from "./action";





class MyApp extends Component {

  render() {
    const { input, movie, bookmarks, onSearch, onBookmark } = this.props;
    return (
      <div className="container">
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Movie search</label>
            <input 
              type="text" 
              className="form-control" 
              aria-describedby="emailHelp"
              value={input}
              onChange={onSearch}
            />
            <h1>{input}</h1>
        </div>
        
        {movie.Title && <Movie {...movie} onBookmark={onBookmark} />}
        <div className="row">
          
            {bookmarks.map((bookmark, index) => (
              <div className="col-4" key={index}>
                <Movie {...bookmark} />
              </div>
            ))}
          
        </div>
       


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    input: state.input || '',
    api_key: state.api_key,
    movie: state.movie || {},
    bookmarks: state.bookmarks || []
    }
}
function mapDispatchToProps(dispatch) {
  return {
    onSearch: (e) => dispatch(onSearch(e)),
    onBookmark: () => dispatch(onBookmark())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyApp);
