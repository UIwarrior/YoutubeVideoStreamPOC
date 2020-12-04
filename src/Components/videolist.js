import React from 'react';

const VideoList = (props) => {
    return (
    <div>
     {
      props.videos.map( video => 
     <div className="item" style={{cursor:'pointer'}} onClick = {() => props.selectVideo(video)}>   
     <img src={video.snippet.thumbnails.medium.url} />   
     <li>{video.snippet.title}</li>
     </div>
     )}
    </div>
    )
}
export default VideoList; 