import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function InputField({ placeHolder, value, onChange, onSubmit }) {

    return (
        <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}>
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={onSubmit}>
                <SearchIcon />
            </IconButton>

            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder={placeHolder ? placeHolder : 'search here'}
                inputProps={{ 'aria-label': 'search your YouTube tags' }}
                value={value}
                onChange={e => onChange(e.target.value)}
                onSubmit={e => onSubmit(e)}
            />

            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

            <IconButton sx={{ p: '10px' }} aria-label="directions" onClick={() => onChange('')}>
                <CloseIcon />
            </IconButton>
        </Paper>
    );
}
