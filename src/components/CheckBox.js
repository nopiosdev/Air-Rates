import { Checkbox } from '@mui/material'
import React from 'react'

const CheckBox = (props) => {
    return (
        <Checkbox
            value={props.value}
            onChange={props.onChange}
            name={props.name}
        />

    )
}

export default CheckBox;