import { InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React from 'react'

const SelectDropDown = (props) => {
    return (
        <>
            {props.label && <InputLabel className='input-label' required>{props.label}</InputLabel>}
            <Select
                className={`select ${props.className}`}
                fullWidth
                IconComponent={props.icon}
                value={props.value}
                onChange={props.onChange}
                disabled={props.disabled ?? false}
                displayEmpty
                name={props.name}
                renderValue={(selected) => {
                    if (!selected) {
                        return <Typography>{props.placeholder}</Typography>;
                    } else {
                        return <Typography>{selected}</Typography>
                    }
                }}
            >
                {props.data?.map((item) => (
                    <MenuItem key={item} value={item}>{item}</MenuItem>
                ))}
            </Select>
        </>
    )
}

export default SelectDropDown