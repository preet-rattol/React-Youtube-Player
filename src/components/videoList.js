import React from 'react';
import VideoItem from './videoItem';

const VideoList = (props) => {
    const videoItems = props.videos.map(video => {     // using map function to iterate through array of videos. 
        return (
            <VideoItem
                key={video.etag} // in react we have to give a key for each item in a array
                video={video}
                onVideoSelected = {props.onVideoSelected}
            /> 
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;