import React from 'react';

import { Grid } from '@material-ui/core';
import VideoItem from './VideoItem';

interface Props {
    videos: any,
    onVideoSelect: any
}

const videoList: React.FC<Props> = ({ videos, onVideoSelect }) => {
    const listOfVideos  = videos.map((video: string, id: string) => <VideoItem key={id} video={video} onVideoSelect={onVideoSelect}/>);

    return (
    <Grid container spacing={10}>
        {listOfVideos}
    </Grid>     
    );
    
};

export default videoList;