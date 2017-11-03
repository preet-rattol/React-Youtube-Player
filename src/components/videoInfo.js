import React from 'react';

const VideoInfo = ({ video }) => {
    if(!video){
        return <div>Loading...</div>
    }

    const videoID = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoID}`;

    return (
        <div className="video-info col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoInfo;