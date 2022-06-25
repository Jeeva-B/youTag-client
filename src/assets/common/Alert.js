import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function ActionAlerts({ text, type }) {
    return (
        <Stack sx={{ width: '30%', textAlign: 'center' }} spacing={2}>
            <Alert severity={type ? type : 'error'}>{text ? text : 'Error!'}</Alert>
        </Stack>
    );
}
