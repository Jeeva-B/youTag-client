import React from 'react';
import { Container } from '@mui/system';
import { Box, Grid } from '@mui/material';
import InputField from '../../assets/common/InputField';
import Chip from './Chip';
import { useDispatch, useSelector } from 'react-redux';
import { getTagsById } from '../../action/tagsAction';
import ActionAlerts from '../../assets/common/Alert';

const Tags = () => {
    const dispatch = useDispatch();
    const tags = useSelector(state => state?.videoTags);
    const isRequesting = useSelector(state => state?.isRequestingForVideoTag);

    const [url, setUrl] = React.useState('');
    const [showAlert, setShowAlert] = React.useState(false);

    const isValidUrl = videoUrl => {
        const option = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        if (videoUrl.match(option)) return videoUrl.match(option)[1];
        return false;
    };

    const getTitleTags = e => {
        e.preventDefault();
        setShowAlert(false);
        if (!isValidUrl(url)) {
            setShowAlert(true);
            return;
        }

        dispatch(getTagsById(url?.split('=')[1]));
    };

    const getTitle = value => setUrl(value);

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
                        placeHolder={'video url here'}
                        value={url}
                        onChange={getTitle}
                        onSubmit={getTitleTags}
                    />
                </Grid>

                <Grid item lg={9} md={10} sm={11} xs={12} sx={{ mt: 5 }}>
                    {showAlert ?
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                listStyle: 'none',
                                p: 0,
                                m: 0,
                            }}>
                            <ActionAlerts text={'Invalid URL'} />
                        </Box>
                        : <Chip
                            tags={tags}
                            isRequesting={isRequesting}
                        />}


                </Grid>
            </Grid>
        </Container>
    );
};

export default Tags;