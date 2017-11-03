import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import VideoInfo from './components/videoInfo';

const API_KEY = 'AIzaSyDxfZTAkB4d7OnBmirI6QV6hFD76TvIsj4';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('reactJs');

    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div className="container">
                <div className="row">
                    <SearchBar onNewSearch={videoSearch} />
                </div>
                <div className="row">
                    <VideoInfo video={this.state.selectedVideo} />
                    <VideoList
                        onVideoSelected={selectedVideo => this.setState({ selectedVideo })}
                        videos={this.state.videos}
                    />
                </div>
            </div>

        );
    };

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term , maxResults: 10}, (videosData) => {
            console.log(videosData);
            this.setState({
                videos: videosData,
                selectedVideo: videosData[0]
            });
        });
    }

};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

registerServiceWorker();
