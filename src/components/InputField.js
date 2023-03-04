import { InputLabel, TextField } from '@mui/material'
import React from 'react'

const InputField = (props) => {
  return (
    <>
      <InputLabel required={props.required ?? true}>{props.label}</InputLabel>
      <TextField
        placeholder={props.placeholder}
        fullWidth
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        mb={-1}
        name={props.name ?? ""}
      />
    </>
  )
}

export default InputField