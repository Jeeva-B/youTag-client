import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/system';
import Loading from '../../assets/common/Loading';
import Grow from '../../assets/images/steppingUp.png';
import ActionAlerts from '../../assets/common/Alert';

const ListItem = styled('li')(({ theme }) => ({ margin: theme.spacing(0.5), }));

export default function ChipsArray({ tags, isRequesting }) {
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
                p: 0,
                m: 0,
            }}
            component="ul"
            lg={12} sm={12}
        >
            {isRequesting ? <Loading /> : chipData && chipData.length > 0 ? chipData.map((tag, index) => {
                return (
                    <ListItem key={index}>
                        <Chip
                            sx={{ fontSize: '20px', m: 0.2 }}
                            label={tag}
                            onDelete={handleDelete(tag)}
                        />
                    </ListItem>
                );
            }) :
                !tags ? <img className='growImage' src={Grow} alt='youtube tags' loading="lazy" /> : <ActionAlerts type={'error'} text={'No tags found'} />
            }
        </Box>
    );
}
