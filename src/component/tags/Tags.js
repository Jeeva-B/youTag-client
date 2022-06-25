import React from 'react';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import InputField from '../../assets/common/InputField';
import Chip from './Chip';
import { useDispatch } from 'react-redux';
import { getTags } from '../../action/tagsAction';

const Tags = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = React.useState('');

    const getTitleTags = e => {
        e.preventDefault();
        dispatch(getTags(title));
    };

    const getTitle = value => setTitle(value);

    return (
        <Container>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 3 }}>
                <Grid item lg={9} md={10} sm={11} xs={12}>
                    <InputField
                        placeHolder={'video title here'}
                        value={title}
                        onChange={getTitle}
                        onSubmit={getTitleTags}
                    />
                </Grid>
                <Grid item lg={9} md={10} sm={11} xs={12} sx={{ mt: 5 }}><Chip /></Grid>
            </Grid>
        </Container>
    );
};

export default Tags;