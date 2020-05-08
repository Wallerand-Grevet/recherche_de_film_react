import React from 'react';
import VideoListItem from '../components/video-list-item';


const VideoList = () => {
    
    const films = ["film1","film2","film3","film4","film5"]
    
    return (

        <div>
            <ul>
                {
                    films.map(film =>{
                        return <VideoListItem key={film} film={film}/>
                    })
                }
            </ul>
        </div>
    );
}

export default VideoList;