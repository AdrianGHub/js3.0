import React, { Component } from 'react';

import { Paper, TextField } from '@material-ui/core';

interface Props {
    onFormSubmit: any;
}


class SearchBar extends Component<Props> {
    state = {
        searchTerm: '',
    };

    handleChange = (event: any) => this.setState({ searchTerm: event.target.value});

    handleSubmit = (event: any) => {
        event.preventDefault();

        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);

    }

    render() {
        return (
            <Paper elevation={6} style={{padding: '25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}/>   
                </form>
            </Paper>
        );
    }
}

export default SearchBar;