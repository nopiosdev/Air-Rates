import { Divider, IconButton, InputBase, InputLabel, Paper } from '@mui/material'
import React from 'react'

const CustomInputField = (props) => {
    return (
        <>
            <InputLabel className='input-label' required={props.required ?? false}>{props.inputlabel}</InputLabel>
            <Paper
                component="form"
                className='custom-inputField'
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                    name={props.name}
                    type='number'
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <span className='inputField-btn' color="primary">
                    {props.btnText}
                </span>
            </Paper>
        </>
    )
}

export default CustomInputField