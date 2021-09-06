import React, { Component } from "react";
import { getMovies } from "../temp/MovieService";

export default class Moviespage extends Component {
  state = {
    movies: getMovies(),
    currSearch:"",
  };
  deleteEntry = (movieObj) => {
    let filterMovies = this.state.movies.filter((movie) => {
      return movie._id != movieObj._id;
    });
    this.setState({
      movies: filterMovies,
    });
  };
  setCurrentText=(e)=>{
      let task=e.target.value
      this.setState({
          currSearch:task,
      })
  }
  render() {
    let { movies,currSearch} = this.state;
    let filteredArray=movies.filter((movieObj)=>{
        let task=movieObj.title.trim().toLowerCase();
        return task.includes(currSearch.trim());
    })
    return (
      <div className="row">
        <div className="col-3">{
            //total 13 cols by default using bootstrap
        }</div>
        <div className="col-9">
            <input type="search" className="" value={this.state.currSearch} onChange={this.setCurrentText} />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rating</th>
              </tr>
            </thead>
            <tbody>
              {filteredArray.map((moviesObj) => {
                return (
                  <tr scope="row" className="movie-item" key={moviesObj._id}>
                    <td>{moviesObj.title}</td>
                    <td>{moviesObj.genre.name}</td>
                    <td>{moviesObj.numberInStock}</td>
                    <td>{moviesObj.dailyRentalRate}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          this.deleteEntry(moviesObj);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
