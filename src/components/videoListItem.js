import React from 'react'

const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url

    return (
        <li onClick={ () => onVideoSelect(video) } className="list-item">
            <div className="item">
                <img className="image" src={ imageUrl } />
                <div className="video-name">
                    <div className="">{ video.snippet.title }</div>
                </div>
            </div>
        </li>
    )
}
export default VideoListItem;