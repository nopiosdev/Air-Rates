import { Button } from '@mui/material'
import React from 'react'

const CustomButton = (props) => {
    return (
        <>
            <Button
                fullWidth
                onClick={props.onClick}
                variant={props.variant ?? "contained"}
            >
                {props.title}
            </Button>
        </>
    )
}

export default CustomButton