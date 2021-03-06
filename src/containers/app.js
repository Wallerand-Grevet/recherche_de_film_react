import React, { Component } from 'react';
import SearchBar from '../components/search-bar';
import VideoList from './video-list';
import VideoDetail from '../components/video-detail';
import axios from 'axios';

const API_END_POINT = "https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL = "discover/movie?api_key=4d3ab8c9e76925ba3947c4632098fae0&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";


class App extends Component {
  constructor(props){
    super(props)
    this.state={movieList:{}, currentMovie:{}}
  }
  componentWillMount(){
    this.initMovies();
  }
  initMovies(){
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}`).then(function(response){
      this.setState({movieList:response.data.results.slice(1,6),currentMovie:response.data.results[0]})
    }.bind(this));
  }
  render(){
    const renderVideoList = () => {
      if (this.state.movieList.length>=5) {
        return <VideoList movieList={this.state.movieList}/>
      }
    }
    return(
      <div>
        <SearchBar/>
        {renderVideoList()}
        <VideoDetail title = {this.state.currentMovie.title} description={this.state.currentMovie.overview} />
        
    </div>
    )
  }
}
export default App;