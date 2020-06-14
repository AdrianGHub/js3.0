import React from 'react';
import { Paper, Typography } from '@material-ui/core';

interface Props {
    video: any;
}

const videoDetails: React.FC<Props> = ({ video }) => {
    if(!video) return <div>Loading...</div>;

    console.log(video.id.videoId);

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <>
            <Paper elevation={6} style={{ height: '70%' }}>
                <iframe frameBorder="0" height="100%" width="100%" title="Movie Player" src={videoSrc}/>
            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }}>
    <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
    <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
    <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </>
    );
};

export default videoDetails;