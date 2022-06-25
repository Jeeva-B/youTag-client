import * as React from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/system';
import Loading from '../../assets/common/Loading';
import Grow from '../../assets/images/steppingUp.png';

const ListItem = styled('li')(({ theme }) => ({ margin: theme.spacing(0.5), }));

export default function ChipsArray() {
    const tags = useSelector(state => state?.tags);
    const isRequesting = useSelector(state => state?.isRequesting);
    const [chipData, setChipData] = React.useState([]);

    React.useEffect(() => {
        setChipData(tags);
    }, [tags]);

    const handleDelete = (chipToDelete) => () => setChipData((chips) => chips?.filter((chip) => chip !== chipToDelete));

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                listStyle: 'none',
                p: 5,
                m: 0,
            }}
            component="ul"
            lg={12} sm={12}
        >
            {isRequesting ? <Loading /> : chipData && chipData.length > 0 ? chipData.map((tag, index) => {
                return (
                    <ListItem key={index}>
                        <Chip
                            label={tag}
                            onDelete={handleDelete(tag)}
                        />
                    </ListItem>
                );
            }) :
                <Box>
                    <img className='growImage' src={Grow} alt='youtube tags' loading="lazy" />
                </Box>
            }
        </Box>
    );
}
