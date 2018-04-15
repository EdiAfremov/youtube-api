import React from 'react'
import VideoListItem from './videoListItem';
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem video={ video } key={ video.etag } onVideoSelect={ props.onVideoSelect } />
    })

    return (
        <ul className='list'>
            { videoItems }
        </ul>
    )
}
export default VideoList