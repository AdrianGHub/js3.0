import React, { Component } from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetails } from './components';

import youtubeApi from './api/youtube';

class App extends Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    handleSubmit = async (searchTerm: string) => {
        const response = await youtubeApi.get('search', { 
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyAtPYHoq5zCU6bIxVX8q28glXvhe1GSL-0',
                q: searchTerm
            }});
        
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    render () {
        const { selectedVideo } = this.state;
        return (
            <Grid justify="center" container spacing={6}>
                <Grid item xs={12}>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            <SearchBar
                            onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            {/* VIDEO LIST  */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default App;