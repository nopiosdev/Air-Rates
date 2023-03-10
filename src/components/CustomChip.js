import { Chip } from '@mui/material'
import React from 'react'

const CustomChip = (props) => {
  return (
    <Chip className={`custom-chip ${props.className}`} onClick={props.onClick} name={props.cargo} avatar={props.avatar} label={props.label} variant={props.variant ?? 'standard'} />
  )
}

export default CustomChip