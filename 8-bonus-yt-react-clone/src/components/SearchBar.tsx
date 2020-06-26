import React, { useState } from 'react';

import { Paper, TextField } from '@material-ui/core';

interface Props {
    onFormSubmit: any;
}

const SearchBar: React.FC<Props> = ({ onFormSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event: any) => setSearchTerm(event.target.value);


    const handleKeyPress = (event: any) => {
        if (event.key === "Enter")

            onFormSubmit(searchTerm);

    };

    return (
        <Paper elevation={6} style={{ padding: '25px' }}>
            <TextField
                fullWidth
                label="Search..."
                onChange={handleChange} onKeyPress={handleKeyPress}
            />
        </Paper>
    );

};

export default SearchBar;