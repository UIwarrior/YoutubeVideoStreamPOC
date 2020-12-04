import React from 'react';

const VideoDetail = ({video}) => {

    if(!video){
        return <div>Loading...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return <div><iframe width="560" height="315" 
    src={videoSrc}
    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe></div>
}
export default VideoDetail;