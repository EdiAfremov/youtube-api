import React from 'react'

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div> loading.... </div>
    }
    const videoId = video.id.videoId
    const url = `https://www.youtube.com/embed/${videoId}`

    return (
        <div className="iframe-container">
            <iframe className="iframe" src={ url }> </iframe>
            <div className="details">
                <div style={ { fontWeight: 700 } }>{ video.snippet.title } </div>
                <div>{ video.snippet.description } </div>
            </div>
        </div>
    )
}

export default VideoDetail
