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
                spacing={5}>
                <Grid item lg={12} md={10} sm={12} xs={12} component='div'>
                    <InputField
                        placeHolder={'video title here'}
                        value={title}
                        onChange={getTitle}
                        onSubmit={getTitleTags}
                    />
                </Grid>
                <Grid item ><Chip /></Grid>
            </Grid>
        </Container>
    );
};

export default Tags;