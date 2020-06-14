import React from 'react';

import { Grid } from '@material-ui/core';
import VideoItem from './VideoItem';

interface Props {
    videos: any
}

const videoList: React.FC<Props> = ({ videos }) => {
    const listOfVideos  = videos.map((video: string, id: string) => <VideoItem key={id} video={video}/>);

    return listOfVideos;
};

export default videoList;