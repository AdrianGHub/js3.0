import React, { useState, useEffect } from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetails, VideoList } from './components';

import youtubeApi from './api/youtube';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        handleSubmit('software engineer');
    });



    const handleSubmit = async (searchTerm: string) => {
        const response = await youtubeApi.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyAtPYHoq5zCU6bIxVX8q28glXvhe1GSL-0',
                q: searchTerm
            }
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };

    return (
        <div style={{ overflowX: 'hidden' }}>
            <Grid justify="center" container spacing={6}>
                <Grid item xs={12}>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <SearchBar
                                onFormSubmit={handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList
                                videos={videos}
                                onVideoSelect={setSelectedVideo} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default App;