import React from 'react';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import InputField from '../assets/common/InputField';
import Chip from './Chip';

const Tags = () => {
    return (
        <Container>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}>
                <Grid item sm={12}> <InputField /></Grid>
                <Grid item ><Chip /></Grid>
            </Grid>
        </Container>
    );
};

export default Tags;