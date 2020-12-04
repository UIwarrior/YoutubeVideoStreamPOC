import React from 'react';
import SearchBar from './Components/searchbar';
import api from './Services/api';
import VideoList from './Components/videolist';
import VideoDetail from './Components/videodetail';

export default class App extends React.Component {
    
    constructor(props){
       super(props);
       this.onTermSubmit = this.onTermSubmit.bind(this); 
       this.onVideoSelect = this.onVideoSelect.bind(this);
       this.state = {
           videos: [],
           selectedVideo: null
       }
    }

    onTermSubmit(term) {
        api.get('/search',
        {
          params: {q:term}
        }).then(res => {
            this.setState({videos: res.data.items});
        })
    }

    onVideoSelect(video){
      console.log('from the app', video);
      this.setState({selectedVideo: video})
    }
    
    render(){
        return (
            <div>
              <SearchBar onFormSubmit ={this.onTermSubmit}/>
              <VideoList videos ={this.state.videos} selectVideo = {this.onVideoSelect}/>
              <VideoDetail video = {this.state.selectedVideo} />
             </div>   

        )
    }
}