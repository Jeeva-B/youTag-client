import React from 'react';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import InputField from '../assets/common/InputField';

const Tags = () => {
    return (
        <Container>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <InputField />
            </Grid>
        </Container>
    );
};

export default Tags;