import React, { Component } from 'react';

import { Grid } from '@material-ui/core';

import { SearchBar, VideoDetails } from './components';

import youtubeApi from './api/youtube';

class App extends Component {
    render () {
        return (
            <Grid justify="center" container>
                <Grid xs={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <SearchBar />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails />
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