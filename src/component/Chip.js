import * as React from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
    const tags = useSelector(state => state?.tags);
    const [chipData, setChipData] = React.useState([]);

    React.useEffect(() => {
        setChipData(tags);
    }, [tags]);

    const handleDelete = (chipToDelete) => () => setChipData((chips) => chips?.filter((chip) => chip !== chipToDelete));

    return (
        <Paper
            elevation={1}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                listStyle: 'none',
                p: 0.5,
                m: 0,
            }}
            component="ul"
        >
            {chipData?.map((tag, index) => {
                return (
                    <ListItem key={index}>
                        <Chip
                            label={tag}
                            onDelete={handleDelete(tag)}
                        />
                    </ListItem>
                );
            })}
        </Paper>
    );
}
